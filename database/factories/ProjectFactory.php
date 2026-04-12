<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
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
            'description' => fake()->paragraph(),
            'icon' => ['fas', 'chevron-right'],
            'created_at' => fake()->dateTime(),
						'carousel_settings' => ['autoplay' => true, 'dots' => true, 'infinite' => true, 'speed' => 500, 'slidesToShow' => 1, 'slidesToScroll' => 1],
            'updated_at' => fake()->dateTime(),
        ];
    }
}
