<?php

namespace Database\Seeders;

use App\Models\StoryHero;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
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

        $stories = [
            [
							'title'       => '$ whoami',
							'subtitle'    => 'I\'m a frontend/software engineer from<br />☀️ Manila, Philippines.',
							'key' => 'whoami',
							'description' => 'With over a decade of experience, I bridge the gap between design and development, delivering intuitive client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music, cooking and learning new things.',
							'hero_image' => ['me/kg_about.png'],
							'social_images' => $socialImages,
						],
						[
							'title'       => '/? why frontend',
							'subtitle'    => '',
							'key' => 'how_me',
							'description' => "Since childhood, I've been fascinated by video games, and web UIs that transformed the way we interact with technology. I have used social media such as Friendster that you can modify its UI that could impress your friends. Apparently, it was all part of front-end development! <br /><br />When starting my education journey, I was fortunate to meet my mentor(s), who introduced me to the world of frontend development that are mostly knowledgeable in both worlds (backend). It was like finding a hidden treasure, and tried my best to cope up with the different kinds of challenging problems that I can apply until today.",
							'hero_image' => ['me/how-me.png'],
							'social_images' => [],
						],
						[
							'title'       => '$ touch',
							'subtitle'    => 'Let\'s get in touch! 👋🏼',
							'key' => 'contact',
							'description' => "Let\'s connect and explore how we can work together. Whether you have a question, need assistance with a project, or just want to chat about design, development, or anything else, I\'m here to help. Feel free to reach out via the contact methods below, or send me an email and let\'s collaborate on your next project!",
							'hero_image' => [],
							'social_images' => [],
						]
        ];

//			foreach ($socialImages as $path => $alt) {
//				$story
//					->addMediaFromDisk($path, 's3')
//					->preservingOriginal()
//					->withCustomProperties(['alt' => $alt])
//					->toMediaCollection('social_images');
//			}

			foreach($stories as $data) {
				$heroImagePaths = $data['hero_image'] ?? [];
				$socialImagesPaths = $data['social_images'] ?? [];

				unset($data['hero_image'], $data['social_images']);

				$data['hero_image'] = collect($heroImagePaths)
					->map(fn (string $path) => [
						'url' => Storage::disk('s3')->url($path),
						'alt' => pathinfo($path, PATHINFO_FILENAME),
					])
					->values()
					->toArray();

				$data['social_images'] = collect($socialImagesPaths)
					->map(fn (string $alt, string $path) => [
						'url' => Storage::disk('s3')->url($path),
						'alt' => $alt,
					])
					->values()
					->toArray();

					StoryHero::create($data);

			}
    }
}
