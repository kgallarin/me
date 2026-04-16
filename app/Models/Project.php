<?php

namespace App\Models;

use App\Traits\ScopesRecent;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory, HasUuids, ScopesRecent;

    protected $guarded = [];

    protected $casts = [
        'icon'              => 'array',
        'carousel_settings' => 'array',
        'images'            => 'array',
        'order'             => 'integer',
    ];

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc')->orderBy('created_at', 'desc');
    }

    public function getImageMedia(): array
    {
        return $this->images ?? [];
    }
}
