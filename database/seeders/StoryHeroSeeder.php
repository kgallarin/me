<?php

namespace Database\Seeders;

use App\Models\StoryHero;
use Illuminate\Database\Seeder;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class StoryHeroSeeder extends Seeder
{
	/**
	 * @throws FileDoesNotExist
	 * @throws FileIsTooBig
	 */
	public function run(): void
    {
        $story = StoryHero::create([
            'title'       => 'Kevin Gallarin',
            'subtitle'    => 'Full Stack Developer',
            'description' => 'I build clean, performant web applications with a focus on great user experiences.',
        ]);

        $heroImages = [
            'me/kg_about.png' => 'Kevin Gallarin profile photo',
        ];

        foreach ($heroImages as $path => $alt) {
            $story
                ->addMediaFromDisk($path, 's3')
                ->preservingOriginal()
                ->withCustomProperties(['alt' => $alt])
                ->toMediaCollection('hero_image');
        }

        $socialImages = [
						'social_images/aspire_gym.jpg'    => 'Aspire gym',
						'social_images/baguio.jpg'        => 'Baguio Coding',
						'social_images/bike_traveler.png'        => 'Bigbiker',
						'social_images/biker_sm.jpg'        => 'Bigbiker',
						'social_images/bkk.png'           => 'Maha Nakhon Bangkok',
						'social_images/bkk2.png'           => 'Night Market Bangkok',
						'social_images/camb.png'           => 'Cambodia',
						'social_images/cm_zoo.png'           => 'Chiang Mai Zoo',
						'social_images/coron.jpg'         => 'Coron Palawan',
						'social_images/dan.png'         => 'Da Nang Vietnam',
						'social_images/dirt_bois.jpg'     => 'Dirt bikers',
						'social_images/eldritch_fenrir.png'     => 'CBR650R',
						'social_images/fuse.png'         => 'The Designer',
						'social_images/greatest_mom.jpg'        => 'Rosalina the Greatest',
						'social_images/krabi.png'         => 'Free Kevin (Mitnick)',
						'social_images/krabi2.png'         => 'Scuba',
						'social_images/kuya_nelson.jpg'        => 'Nelson Gallarin',
						'social_images/ky.jpg'      => 'Khao Yai Thailand',
						'social_images/lao2.png'         => 'Laos car window shot',
						'social_images/line.png'         => 'The Line Condo Chatuchak',
						'social_images/mentors.jpg'         => 'College friends',
						'social_images/mom_hs_grad.jpg'      => 'Mom High School Graduation',
						'social_images/mustard.jpg'      => 'Mustard the Husky',
						'social_images/pai.png'      => 'Pai Thailand',
						'social_images/pepper.jpg'      => 'Pepper my love',
						'social_images/phuket.png'      => 'Phuket',
						'social_images/phuket2.jpg'      => 'Phuket Inihaw',
						'social_images/phuket2.png'      => 'Capturing Image',
						'social_images/ranong.png'      => 'Ranong Thailand',
						'social_images/ranong2.png'      => 'Ranong Lens',
						'social_images/singer.jpg'      => 'Highscool band',
						'social_images/th.png'      => 'Kalesa Thailand',
						'social_images/thesis-mates.jpg'      => 'Kevin, Lovely and Me',
						'social_images/thong_sen.jpg'      => 'Thailand Lady Elephant',
						'social_images/thong_sen2.jpg'      => 'Thailand Lady Elephant',
						'social_images/unicorn.png'     => 'Eldritch Unicorn',
        ];

        foreach ($socialImages as $path => $alt) {
            $story
                ->addMediaFromDisk($path, 's3')
                ->preservingOriginal()
                ->withCustomProperties(['alt' => $alt])
                ->toMediaCollection('social_images');
        }
    }
}
