<?php

namespace App\Models;

use App\Traits\FormatsMedia;
use App\Traits\ScopesRecent;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Recommendation extends Model implements HasMedia
{
    use HasFactory, HasUuids, InteractsWithMedia, FormatsMedia, ScopesRecent;

    protected $guarded = [];

		protected $casts = [
			'order' => 'integer',
		];

		public function scopeOrdered($query)
		{
			return $query->orderBy('order', direction: 'asc')->orderBy('created_at', direction: 'desc');
		}

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
}
