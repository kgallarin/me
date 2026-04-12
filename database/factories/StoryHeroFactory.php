<?php

namespace Database\Factories;

use App\Models\StoryHero;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<StoryHero>
 */
class StoryHeroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           	'title' => fake()->sentence(),
						'subtitle' => fake()->sentence(),
						'description' => fake()->paragraph(),
						'created_at' => fake()->dateTime(),
						'updated_at' => fake()->dateTime(),
        ];
    }
}
