<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TitledParagraphs extends Model
{
    /** @use HasFactory<\Database\Factories\TitledParagraphsFactory> */
    use HasFactory, HasUuids;

		protected $guarded = [];

		protected $casts = [
			'paragraph' => 'array',
		];
}
