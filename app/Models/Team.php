<?php

namespace App\Models;

use App\Http\Traits\HasPicture;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Team extends Model
{
    use HasFactory;
    use SoftDeletes;
    use HasPicture;

    protected $appends = [
        'photo',
    ];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->withTrashed()->firstOrFail();
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function members()
    {
        return $this->hasMany(User::class);
    }

    public function teamInvitations()
    {
        return $this->hasMany(TeamInvitation::class);
    }

    public function removeUser(User $user)
    {
        if ($user->team_id === $this->id) {
            $user->forceFill([
                'team_id' => null,
            ])->save();
        }

        $this->users()->detach($user);
    }

    public function purge()
    {
        $this->owner()->where('team_id', $this->id)
                ->update(['team_id' => null]);

        $this->members()->where('team_id', $this->id)
                ->update(['team_id' => null]);

        $this->members()->detach();

        $this->delete();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%');
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
