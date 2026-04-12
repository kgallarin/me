<?php

namespace Database\Factories;

use App\Models\TitledParagraphs;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<TitledParagraphs>
 */
class TitledParagraphsFactory extends Factory
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
            'paragraph' => fake()->paragraphs(3),
        ];
    }
}
