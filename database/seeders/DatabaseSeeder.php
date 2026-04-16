<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ContentSeeder::class,
            RecommendationSeeder::class,
            ProjectSeeder::class,
            IconLinksSeeder::class,
        ]);

    }
}
