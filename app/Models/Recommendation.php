<?php

namespace App\Models;

use App\Traits\ScopesRecent;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    use HasFactory, HasUuids, ScopesRecent;

    protected $guarded = [];

	protected $casts = [
		'avatar' => 'array',
		'order'  => 'integer',
	];

	public function scopeOrdered($query)
	{
		return $query->orderBy('order', direction: 'asc')->orderBy('created_at', direction: 'desc');
	}

    public function getAvatarMedia(): ?array
    {
        return $this->avatar ?? null;
    }
}
