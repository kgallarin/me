<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait FormatsMedia
{
    protected function formatMedia(Media $media): array
    {
        return [
            'id'               => $media->uuid,
            'url'              => $media->getUrl(),
            'alt'              => $media->getCustomProperty('alt'),
            'collectionName'   => $media->collection_name,
            'mimeType'         => $media->mime_type,
            'size'             => $media->size,
            'srcset'           => $media->getSrcset(),
            'responsiveImages' => collect($media->responsive_images)
                ->flatMap(fn ($data) => collect($data['urls'] ?? [])
                    ->map(fn ($width, $path) => [
                        'url'   => Storage::disk('s3')->url($path),
                        'width' => (int) $width,
                    ])
                )->values()->toArray(),
        ];
    }
}
