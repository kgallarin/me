<?php

namespace Database\Seeders;

use App\Models\IconLink;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

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
							'name' => 'github',
							'url' => 'https://github.com/kgallarin',
							'icon' => ['fab', 'github'],
							'class_color' => 'text-primary-500',
						],
//            [
//                'name' => 'facebook',
//                'url' => 'https://www.facebook.com/kevin.gallarin/',
//                'icon' => ['fab', 'facebook'],
//                'class_color' => 'text-[#006AFF]',
//            ],
//            [
//                'name' => 'instagram',
//                'url' => 'https://www.instagram.com/kgallarin/',
//                'icon' => ['fab', 'instagram'],
//                'class_color' => 'text-[#E4405F]',
//            ],
//						[
//							'name' => 'resume',
//							'url' => '',
//							'icon' => ['fas', 'laptop-file'],
//							'class_color' => 'text-green-500',
//						],
        ];

        foreach ($links as $link) {

					IconLink::updateOrCreate(['name' => $link['name']], $link);
        }
    }
}
