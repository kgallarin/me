<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Artisan::call('media-library:clean');

        $this->call([
            ContentSeeder::class,
            RecommendationSeeder::class,
            ProjectSeeder::class,
            IconLinksSeeder::class,
        ]);

    }
}
