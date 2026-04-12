<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TitledItems extends Model
{
    /** @use HasFactory<\Database\Factories\TitledItemsFactory> */
    use HasFactory, HasUuids;

		protected $guarded = [];

		protected $casts = [
			'items' => 'array',
		];
}
