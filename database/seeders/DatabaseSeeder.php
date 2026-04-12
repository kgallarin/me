<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\ChartedSkillFactory;
use Database\Factories\ContactLinksFactory;
use Database\Factories\ImageFactory;
use Database\Factories\ProjectFactory;
use Database\Factories\RecommendationFactory;
use Database\Factories\StoryHeroFactory;
use Database\Factories\TitledItemsFactory;
use Database\Factories\TitledParagraphsFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
			ChartedSkillFactory::new()->count(5)->create();
			 RecommendationFactory::new()->count(5)->create();
			 ContactLinksFactory::new()->count(5)->create();
			 ProjectFactory::new()->count(5)->create();
			 TitledItemsFactory::new()->count(5)->create();
			 TitledParagraphsFactory::new()->count(5)->create();
			 StoryHeroFactory::new()->count(5)->create();
			 ImageFactory::new()->count(5)->create();
    }
}
