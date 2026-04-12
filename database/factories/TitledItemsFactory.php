<?php

namespace Database\Factories;

use App\Models\TitledItems;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<TitledItems>
 */
class TitledItemsFactory extends Factory
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
					'items' => fake()->paragraphs(3),
        ];
    }
}
