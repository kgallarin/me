<?php

namespace Database\Factories;

use App\Models\ContactLinks;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ContactLinks>
 */
class ContactLinksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
					'name' => fake()->word(),
					'url' => fake()->url(),
					'icon' => ['fas', fake()->word()],
					'class_color' => fake()->word(),
        ];
    }
}
