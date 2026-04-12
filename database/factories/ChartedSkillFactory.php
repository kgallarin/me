<?php

namespace Database\Factories;

use App\Models\ChartedSkill;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChartedSkillFactory extends Factory
{
    protected $model = ChartedSkill::class;

    public function definition(): array
    {
        return [
					'left_title' => fake()->word,
					'right_title' => fake()->word,
					'left_content' => [
						'Text 1',
						'Text 2',
						"Text 3",
					],
					'right_content' => [
						'Text 1',
						'Text 2',
						"Text 3",
					],
        ];
    }
}
