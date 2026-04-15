<?php

namespace Database\Seeders;

use App\Models\IconLink;
use Illuminate\Database\Seeder;

class IconLinksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $links = [
            [
                'name' => 'linkedIn',
                'url' => 'https://www.linkedin.com/in/kmgallarin/',
                'icon' => ['fab', 'linkedin'],
                'class_color' => 'text-[#0982c0]',
            ],
            [
                'name' => 'facebook',
                'url' => 'https://www.facebook.com/kevin.gallarin/',
                'icon' => ['fab', 'facebook'],
                'class_color' => 'text-[#006AFF]',
            ],
            [
                'name' => 'instagram',
                'url' => 'https://www.instagram.com/kgallarin/',
                'icon' => ['fab', 'instagram'],
                'class_color' => 'text-[#E4405F]',
            ],
            [
                'name' => 'github',
                'url' => '',
                'icon' => ['fab', 'github'],
                'class_color' => 'text-primary-500',
            ],
						[
							'name' => 'resume',
							'url' => '/assets/pdf/resume.pdf',
							'icon' => ['fas', 'laptop-file'],
							'class_color' => 'text-green-500',
						],
        ];

        foreach ($links as $link) {
            IconLink::updateOrCreate(['name' => $link['name']], $link);
        }
    }
}
