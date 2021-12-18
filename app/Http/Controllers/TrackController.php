<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Track;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

use App\Services\MusicProvidersService as MusicProviders;

class TrackController extends Controller
{

    public function index(Playlist $playlist)
    {
        return response()->json([
            'filters' => Request::all('search'),
            'tracks' => $playlist->tracks()
                ->orderBy('track_name')
                ->filter(Request::only('search'))
                ->get()
        ]);
    }

    public function search()
    {

        return response()->json([
            'filters' => Request::only('term'),
            'tracks' => (new MusicProviders)->search(Request::get('term')),
        ]);
    }


    public function store(Playlist $playlist)
    {

        // VALIDATE
        Request::validate([
            'provider' => ['required', 'max:50'],
            'track_provider_id' => ['required', 'max:255'],
            'track_provider_url' => ['required', 'url', 'max:255'],
            'artist_name' => ['required', 'max:255'],
            'track_name' => ['required', 'max:255'],
            'album_name' => ['required', 'max:255'],
            'preview_url' => ['required', 'max:255'],
            'release_date' => ['nullable', 'date'],
            'artwork_url' => ['required'],
        ]);

        // TRACK
        $track = $playlist->tracks()->updateOrCreate(
            [
                'provider' => Request::get('provider'),
                'track_provider_id' => Request::get('track_provider_id'),
            ],
            [
                'track_provider_url' => Request::get('track_provider_url'),
                'artist_name' => Request::get('artist_name'),
                'track_name' => Request::get('track_name'),
                'album_name' => Request::get('album_name'),
                'preview_url' => Request::get('preview_url'),
                'release_date' => Request::get('release_date'),
                'artwork_url' => Request::get('artwork_url'),
            ]
        );

        // ANSWERS
        $track->answers()->updateOrCreate(
            ['key' => 'Artist'],
            ['value' => Request::get('artist_name')]
        );
        $track->answers()->updateOrCreate(
            ['key' => 'Title'],
            ['value' => Request::get('track_name')]
        );
        $track->answers()->updateOrCreate(
            ['key' => 'Album'],
            ['value' => Request::get('album_name')]
        );

        return Redirect::back()->with('Track added');

    }


    public function update(Room $room)
    {
        if (App::environment('demo') && $room->isDemoRoom()) {
            return Redirect::back()->with('error', 'Updating the demo room is not allowed.');
        }

        Request::validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('rooms')->ignore($room->id)],
            'password' => ['nullable'],
            'owner' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
        ]);

        $room->update(Request::only('first_name', 'last_name', 'email', 'owner'));

        return Redirect::back()->with('success', 'Room updated.');
    }

    public function destroy(Track $track)
    {
        $track->delete();
    }

}
