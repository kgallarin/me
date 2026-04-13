<?php

namespace App\Models;

use App\Traits\FormatsMedia;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ChartedSkill extends Model implements HasMedia
{
    use HasFactory, HasUuids, InteractsWithMedia, FormatsMedia;

    protected $guarded = [];

    protected $casts = [
        'left_content'  => 'array',
        'right_content' => 'array',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image')
            ->singleFile()
            ->useDisk('s3')
            ->withResponsiveImages();
    }

    public function getImageMedia(): ?array
    {
        $media = $this->getFirstMedia('image');

        return $media ? $this->formatMedia($media) : null;
    }
}
