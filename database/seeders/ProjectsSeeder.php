<?php

namespace Database\Seeders;

use App\Models\Projects;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{

    use WithoutModelEvents;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Projects::factory(5)->create();

        Projects::factory()->create([
            'name' => 'Sample Project',
            'description' => 'This is a sample project description.',
            'problem' => 'Sample problem statement',
            'summary' => 'Sample summary of the project',
        ]);
    }
}
