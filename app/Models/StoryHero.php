<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoryHero extends Model
{
    /** @use HasFactory<\Database\Factories\StoryHeroFactory> */
    use HasFactory;

		protected $guarded = [];
}
