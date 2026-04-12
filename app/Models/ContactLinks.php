<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactLinks extends Model
{
    /** @use HasFactory<\Database\Factories\ContactLinksFactory> */
    use HasFactory, HasUuids;

		protected $guarded = [];

		protected $casts = [
			'icon' => 'array',
		];
}
