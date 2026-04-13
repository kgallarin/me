<?php

namespace App\Models;

use App\Traits\FormatsMedia;
use App\Traits\ScopesRecent;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Project extends Model implements HasMedia
{
    use HasFactory, HasUuids, InteractsWithMedia, FormatsMedia, ScopesRecent;

    protected $guarded = [];

    protected $casts = [
        'icon'              => 'array',
        'carousel_settings' => 'array',
        'order'             => 'integer',
    ];

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc')->orderBy('created_at', 'desc');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('project_images')
            ->useDisk('s3')
            ->withResponsiveImages();
    }

    public function getImageMedia(): array
    {
        return $this->getMedia('project_images')
            ->map(fn (Media $media) => $this->formatMedia($media))
            ->toArray();
    }
}
