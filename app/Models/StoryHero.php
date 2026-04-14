<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class StoryHero extends Model
{
    /** @use HasFactory<\Database\Factories\StoryHeroFactory> */
    use HasFactory, HasUuids  ;

    protected $guarded = [];
		protected $casts = [
				'hero_image' => 'array',
				'social_images' => 'array',
			];

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
        return $this->hero_image ?? [];
    }

    public function getSocialImagesMedia(): array
    {
				return $this->social_images ?? [];
    }
}
