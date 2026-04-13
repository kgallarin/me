<?php

namespace App\Models;

use App\Traits\FormatsMedia;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class StoryHero extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\StoryHeroFactory> */
    use HasFactory, HasUuids, InteractsWithMedia, FormatsMedia;

    protected $guarded = [];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('hero_image')
            ->useDisk('s3')
            ->withResponsiveImages();

        $this->addMediaCollection('social_images')
            ->useDisk('s3')
            ->withResponsiveImages();
    }

    public function getHeroImagesMedia(): array
    {
        return $this->getMedia('hero_image')
            ->map(fn (Media $media) => $this->formatMedia($media))
            ->toArray();
    }

    public function getSocialImagesMedia(): array
    {
        return $this->getMedia('social_images')
            ->map(fn (Media $media) => $this->formatMedia($media))
            ->toArray();
    }
}
