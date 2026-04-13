<?php

namespace App\Models;

use App\Traits\FormatsMedia;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Recommendation extends Model implements HasMedia
{
    use HasFactory, HasUuids, InteractsWithMedia, FormatsMedia;

    protected $guarded = [];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('avatar')
            ->singleFile()
            ->useDisk('s3')
            ->withResponsiveImages();
    }

    public function getAvatarMedia(): ?array
    {
        $media = $this->getFirstMedia('avatar');

        return $media ? $this->formatMedia($media) : null;
    }

    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}
