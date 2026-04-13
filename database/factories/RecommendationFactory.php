<?php

namespace Database\Factories;

use App\Models\Recommendation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Recommendation>
 */
class RecommendationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author' => fake()->name(),
            'title' => fake()->jobTitle(),
            'text' => fake()->paragraph(),
						'rating' => fake()->numberBetween(1, 5),
            'linkedIn'=> fake()->boolean(),
        ];
    }
}
