<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title'       => 'kgallarin.com',
                'link'        => 'https://github.com/kgallarin/me',
                'description' => 'My personal website that I built from scratch to showcase my skills, technologies and myself. I plan to add more features and content whenever available to share some ideas and some of my experiences. Built with GraphQL API and yo, it has tests!',
                'images'      => ['projects/webp/kgdev.webp', 'projects/webp/kgdev2.webp'],
                'order'       => 1,
								 'icon' => [
									 [ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									 [ 'icon' => ['fab', 'vuejs'], 'color' => 'text-green-500' ],
									 [ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
									 [ 'icon' => ['fab', 'typescript'], 'color' => 'text-blue-500' ],
									 [ 'icon' => ['fab', 'tailwind-css'], 'color' => 'text-teal-400' ],
									 [ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
									 [ 'icon' => ['fab', 'laravel'], 'color' => 'text-red-500' ],
								 ],
                'carousel_settings' => ['autoplay' => true, 'showIndicators' => true, 'showArrows' => true],
            ],
            [
                'title'       => 'loomberryliving',
                'description' => 'Curated list of products like bed sheets, pillows, and more. Admin panel for managing products, prices, quantity, colors and more. (soon)',
                'images'      => ['projects/webp/loomberryliving.webp'],
                'order'       => 2,
								'icon' => [
									[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									[ 'icon' => ['fab', 'tailwind-css'], 'color' => 'text-teal-400' ],
									[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
									[ 'icon' => ['fab', 'laravel'], 'color' => 'text-red-500' ],
									[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
									[ 'icon' => ['fab', 'typescript'], 'color' => 'text-blue-500' ],
									[ 'icon' => ['fab', 'vuejs'], 'color' => 'text-green-500' ],
								],
								'carousel_settings' => ['autoplay' => true, 'showIndicators' => true, 'showArrows' => false],
            ],
            [
                'title' => 'e-moderators',
							 	'link' => 'https://e-moderators.com/',
                'description' => 'Website that recruits and employs people to work as online chat moderators, often for adult-oriented dating or chat platforms.',
								'images'      => ['projects/webp/e-moderators.webp'],
                'order'       => 3,
								'icon' => [
									[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
									[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
									[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
									[ 'icon' => ['fab', 'vuejs'], 'color' => 'text-green-500' ],
								],
								'carousel_settings' => ['autoplay' => false, 'showIndicators' => false, 'showArrows' => false],
            ],
            [
                'title'       => 'dating app',
                'description' =>'A multiple templated website with localization, messaging, push notifications, and multiple payment gateway integrations. It allows users to create profiles, browse other profiles, and connect with others who share similar interests. Project includes heavy testing with Jest, Jasmine and Cypress for E2E',
								'images'      => ['projects/webp/dating-1.webp', 'projects/webp/dating-3.webp'],
                'order'       => 4,
                'icon'        => [
									[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									[ 'icon' => ['fab', 'tailwind-css'], 'color' => 'text-teal-400' ],
									[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
									[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
									[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
									[ 'icon' => ['fab', 'typescript'], 'color' => 'text-blue-500' ],
								],
                'carousel_settings' => ['autoplay' => true, 'showIndicators' => true, 'showArrows' => true],
            ],
            [
                'title'       => 'hydropay',
								'link'        => 'https://optimail-dev.github.io/hydropay-frontend-2020',
                'description' => 'A payment gateway that allows users to pay for their dating app subscriptions. It includes a dashboard for managing subscriptions, billing, and payment methods.',
                'images'      => ['projects/webp/hydropay.webp','projects/webp/hydropay-2.webp'],
                'order'       => 5,
                'icon'        => [
									[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
									[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
									[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
								],
                'carousel_settings' => ['autoplay' => false, 'showIndicators' => false, 'showArrows' => false],
            ],
            [
                'title'       => 'online gambling websites',
                'description' => 'Maintained and created multiple online casino websites that cater to the needs of online gamblers. With heavy forms and complex user interfaces that change frequently for promotions and occasions.',
                'order'       => 6,
                'icon'        => [
									[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
									[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
									[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
									[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
								],
                'carousel_settings' => ['autoplay' => false, 'showIndicators' => false, 'showArrows' => false],
                'images'      => ['projects/webp/online-gambling.webp'],
            ],
						[
							'title'       => 'horsepower',
							'description' => 'Provides HR benefits, healthcare insurance/HMO, and administrative tools to freelancers, solopreneurs, and micro-SMEs. It acts as a one-stop-shop, helping local freelancers access benefits often missing from standard contract work.',
							'images'      => ['projects/webp/horsepower.webp'],
							'order'       => 7,
							'icon'        => [
								[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
								[ 'icon' => ['fab', 'bootstrap'], 'color' => 'text-purple-400' ],
								[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
								[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
								[ 'icon' => ['fab', 'less'], 'color' => 'text-blue-400' ],
							],
							'carousel_settings' => ['autoplay' => false, 'showIndicators' => false, 'showArrows' => false],
						],
						[
						'title'       => 'fliptrip',
						'description' => 'Simplifies booking travel to off-the-beaten-path destinations in the Philippines. It connects travelers with local providers for accommodation, transportation, and tours, promoting sustainable community-based tourism.',
						'order'       => 8,
						'icon'        => [
							[ 'icon' => ['fab', 'html5'], 'color' => 'text-orange-400' ],
							[ 'icon' => ['fab', 'bootstrap'], 'color' => 'text-purple-400' ],
							[ 'icon' => ['fab', 'css3'], 'color' => 'text-blue-500' ],
							[ 'icon' => ['fab', 'js'], 'color' => 'text-yellow-400' ],
							[ 'icon' => ['fab', 'less'], 'color' => 'text-blue-400' ],
							[ 'icon' => ['fab', 'sass'], 'color' => 'text-pink-400' ],
						],
						'carousel_settings' => ['autoplay' => false, 'showIndicators' => false, 'showArrows' => false],
						'images'      => ['projects/webp/fliptrip.webp'],
					],
        ];

        foreach ($projects as $data) {
            $imagePaths = $data['images'] ?? [];
            unset($data['images']);

            $data['images'] = collect($imagePaths)
                ->map(fn (string $path) => [
                    'url' => Storage::disk('s3')->url($path),
                    'alt' => pathinfo($path, PATHINFO_FILENAME),
                ])
                ->values()
                ->toArray();

            Project::create($data);
        }
    }
}
