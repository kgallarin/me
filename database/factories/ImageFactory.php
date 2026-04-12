<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Recommendation;
use App\Models\Project;

/**
 * @extends Factory<Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
				$imageable = fake()->randomElement([Recommendation::class, Project::class]);
        return [
					'imageable_id' => $imageable::factory(),
					'imageable_type' => $imageable,
            'path' => fake()->imageUrl(),
            'alt' => fake()->sentence(),
					'title' => fake()->word(),
					'collection_name' => fake()->word(),
					'description' => fake()->sentence(),
					'mime_type' => fake()->mimeType(),
					'size' => fake()->numberBetween(1000, 1000000),
					'responsive_images' => ['small' => fake()->imageUrl(), 'medium' => fake()->imageUrl(), 'large' => fake()->imageUrl()],
					'created_at' => fake()->dateTime(),
					'updated_at' => fake()->dateTime(),
        ];
    }
}
