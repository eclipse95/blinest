<?php

namespace App\Http\Controllers\Admin;

use App\Models\Team;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TeamController extends AdminController
{
    public function index()
    {
        return Inertia::render('Admin/Teams/Index', [
            'filters' => Request::all('search', 'trashed'),
            'teams' => Team::orderBy('updated_at')
                ->filter(Request::only('search', 'trashed'))
                ->withCount('members')
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function create()
    {
        if(Auth::user()->ownsTeam())
            return redirect()->back()->with('error', 'You already own a team.');

        return Inertia::render('Admin/Teams/Create');
    }

    public function store()
    {
        Request::validate([
            'name' => ['required', 'max:50', Rule::unique('teams')->whereNull('deleted_at')],
            'photo' => ['nullable', 'image'],
        ]);

        $team = Auth::user()->team()->create([
            'name' => Request::get('name'),
            'photo_path' => Request::file('photo') ? Request::file('photo')->store('teams') : null,
        ]);

        Auth::user()->update([
            'team_id' => $team->id,
        ]);

        return Redirect::route('admin.teams')->with('success', 'Team created.');
    }

    public function edit(Team $team)
    {
        return Inertia::render('Admin/Teams/Edit', [
            'team' => [
                'id' => $team->id,
                'name' => $team->name,
                'user_id' => $team->user_id,
                'photo' => $team->photo,
                'members' => $team->members,
                'deleted_at' => $team->deleted_at,
            ],
        ]);
    }

    public function update(Team $team)
    {

        Request::validate([
            'name' => ['required', 'max:50', Rule::unique('teams')->ignore($team->id)->whereNull('deleted_at')],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'photo' => ['nullable', 'image'],
        ]);

        $team->update(Request::only('name', 'user_id'));

        if (Request::file('photo')) {
            $team->update(['photo_path' => Request::file('photo')->store('teams')]);
        }

        return Redirect::back()->with('success', 'Team updated.');
    }

    public function destroy(Team $team)
    {
        $team->delete();
        return Redirect::back()->with('success', 'Team deleted.');
    }

    public function restore(Team $team)
    {
        $team->restore();
        return Redirect::back()->with('success', 'Team restored.');
    }
}
