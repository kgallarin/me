<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class ContentSeeder extends Seeder
{
	/**
	 * @throws FileDoesNotExist
	 * @throws FileIsTooBig
	 */
		public function run(): void
    {
				$socialImages = [
					'social_images/webp/aspire_gym.webp'    => 'Aspire gym',
					'social_images/webp/baguio.webp'        => 'Baguio Coding',
					'social_images/webp/bike_traveler.webp'        => 'Bigbiker',
					'social_images/webp/biker_sm.webp'        => 'Bigbiker',
					'social_images/webp/bkk.webp'           => 'Maha Nakhon Bangkok',
					'social_images/webp/bkk2.webp'           => 'Night Market Bangkok',
					'social_images/webp/camb.webp'           => 'Cambodia',
					'social_images/webp/cm_zoo.webp'           => 'Chiang Mai Zoo',
					'social_images/webp/coron.webp'         => 'Coron Palawan',
					'social_images/webp/dan.webp'         => 'Da Nang Vietnam',
					'social_images/webp/dirt_bois.webp'     => 'Dirt bikers',
					'social_images/webp/eldritch_fenrir.webp'     => 'CBR650R',
					'social_images/webp/fuse.webp'         => 'The Designer',
					'social_images/webp/greatest_mom.webp'        => 'Rosalina the Greatest',
					'social_images/webp/krabi.webp'         => 'Free Kevin (Mitnick)',
					'social_images/webp/krabi2.webp'         => 'Scuba',
					'social_images/webp/kuya_nelson.webp'        => 'Nelson Gallarin',
					'social_images/webp/ky.webp'      => 'Khao Yai Thailand',
					'social_images/webp/lao2.webp'         => 'Laos car window shot',
					'social_images/webp/line.webp'         => 'The Line Condo Chatuchak',
					'social_images/webp/mentors.webp'         => 'College friends',
					'social_images/webp/mom_hs_grad.webp'      => 'Mom High School Graduation',
					'social_images/webp/mustard.webp'      => 'Mustard the Husky',
					'social_images/webp/pai.webp'      => 'Pai Thailand',
					'social_images/webp/pepper.webp'      => 'Pepper my love',
					'social_images/webp/phuket.webp'      => 'Phuket',
					'social_images/webp/phuket2.webp'      => 'Phuket Inihaw',
					'social_images/webp/phuket_beach.webp'      => 'Capturing Image',
					'social_images/webp/ranong.webp'      => 'Ranong Thailand',
					'social_images/webp/ranong2.webp'      => 'Ranong Lens',
					'social_images/webp/singer.webp'      => 'Highscool band',
					'social_images/webp/th.webp'      => 'Kalesa Thailand',
					'social_images/webp/thesis-mates.webp'      => 'Kevin, Lovely and Me',
					'social_images/webp/thong_sen.webp'      => 'Thailand Lady Elephant',
					'social_images/webp/thong_sen2.webp'      => 'Thailand Lady Elephant',
					'social_images/webp/unicorn.webp'     => 'Eldritch Unicorn',
					'social_images/webp/baby_elephant.webp'     => 'Baby Elephant',
					'social_images/webp/coron3.webp'     => 'Coron Palawan',
					'social_images/webp/libra.webp'     => 'Elephant',
					'social_images/webp/slept.webp'     => 'Elephant',
				];

        $contents = [
            [
							'title'       => '$ whoami',
							'subtitle'    => 'I\'m a frontend/software engineer from<br />☀️ Manila, Philippines.',
							'key' => 'whoami',
							'content' => [
								[
									'title' => '',
									'text' => 'With over a decade of experience, I bridge the gap between design and development, delivering intuitive client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music, cooking and learning new things.',
								],
							],
							'hero_image' => ['me/webp/kg_about.webp'],
							'social_images' => $socialImages,
						],
						[
							'title'       => '/? why frontend',
							'subtitle'    => '',
							'key' => 'how_me',
							'content' => [
								[
									'title' => '',
									'text' => "Since childhood, I've been fascinated by video games, and web UIs that transformed the way we interact with technology. I have used social media such as Friendster that you can modify its UI that could impress your friends. Apparently, it was all part of front-end development! <br /><br />When starting my education journey, I was fortunate to meet my mentor(s), who introduced me to the world of frontend development that are mostly knowledgeable in both worlds (backend). It was like finding a hidden treasure, and tried my best to cope up with the different kinds of challenging problems that I can apply until today.",
								],
							],
							'hero_image' => ['me/webp/how-me.webp'],
							'social_images' => [],
						],
						[
							'title'       => '$ touch',
							'subtitle'    => "Let's get in touch! 👋🏼",
							'key' => 'contact',
							'content' => [
								[
									'title' => '',
									'text' => "Let's connect and explore how we can work together. Whether you have a question, need assistance with a project, or just want to chat about design, development, or anything else, I'm here to help. Feel free to reach out via the contact methods below, or send me an email and let's collaborate on your next project!",
								],
							],
							'hero_image' => ['social_images/webp/krabi.webp'],
							'social_images' => [],
						],
						[
							'title'       => 'Kudos',
							'subtitle'    => 'from my highly respected people',
							'key' => 'recommendations',
							'content' => [	],
							'hero_image' => [],
							'social_images' => [],
						],
						[
							'title'       => 'My Skills',
							'subtitle'    => 'more or less',
							'key' => 'graphed_skills',
							'content' => [	],
							'hero_image' => [],
							'social_images' => [],
						],
						[
							'title'       => '',
							'subtitle'    => '',
							'key' => 'charted_skills',
							'content' => [
								[
									'title' => 'Perceptive side',
									'text' => "Animation Fluidity<br /><br />Attention to details and typography<br /><br />Communicating with artist's perspective<br /><br />Design Feels<br /><br />Eye on design<br /><br />Finding beauty to everything<br /><br />User Experience",
								],
								[
									'title' => 'Developer side',
									'text' => "Front-end development<br /><br />Sass, LESS, S/CSS<br /><br />State Management<br /><br />Automated testing<br /><br />Form Manipulation<br /><br />JavaScript / TypeScript<br /><br />Laravel / GraphQL<br /><br />Eating Pizza<br /><br />Drinking Coffee",
								],
							],
							'hero_image' => ['me/webp/kg_chart1.webp'],
							'social_images' => [],
						],
						[
							'title'       => 'My skills',
							'subtitle'    => 'more or less',
							'key' => 'grapghed_skills',
							'content' => [
								[
									'title' => '',
									'text' => "",
								],
							],
							'hero_image' => [],
							'social_images' => [],
						],
						[
							'title'       => 'Random Nuggets',
							'subtitle'    => '',
							'key' => 'random_facts',
							'content' => [
								[
									'title' => '',
									'text' => "Workout and driving are my Zen time!<br /><br />I love animals<br /><br />I love occasionally playing ARPGs<br /><br />I'm a bit sensitive to aesthetics<br /><br />I play guitar and can sing (in tune)<br /><br />Analog/High-Fi audio enthusiast<br /><br />Always keen to adventures<br /><br />A bit of a clean freak<br /><br />Always wants improvement<br /><br />Loves cooking<br /><br />I drink a lot of coffee",
								],
							],
							'hero_image' => ['me/webp/ojophile2.webp'],
							'social_images' => [],
						],
						[
							'title'       => 'Gists about me',
							'subtitle'    => '',
							'key' => 'gists',
							'content' => [
								[
									'title' => '',
									'text' => 'I\'m a Manila-based developer that specializes in web development. Since 2014, I\'ve been working on various projects with great-minded people that have helped me grow and learn. As I\'m enjoying working with different technologies, frameworks, and different complex problems from project requirements; it takes me to different kinds of stance to tackle challenges more efficiently.<br /><br />Marking the longest chapter of my career, I had the opportunity to work with people from different cultures and backgrounds which has helped me grow as a person and as a developer with different kinds of ideas and perspectives.',
								],
							],
							'hero_image' => [],
							'social_images' => [],
						],
						[
						'title'       => 'Facts',
						'subtitle'    => '',
						'key' => 'personal_facts',
						'content' => [
							[
								'title' => 'Full Name',
								'text' => 'Kevin Morales Gallarin',
							],
							[
								'title' => 'Nickname(s)',
								'text' => 'Kevin, KG, my best friends call me Kilay or "eyebrows" because of my unibrows (well, I lived with it)',
							],
							[
								'title' => 'Born and Raised',
								'text' => 'Manila, Philippines',
							],
							[
								'title' => 'Started my career as frontend',
								'text' => '2014 With my awesome thesis-mates in college!',
							],
							[
								'title' => 'Education',
								'text' => 'Bachelor of Science in Information Technology, Specialized in Web Application Development, online tutorials, mentors, and self-learning.',
							],
							[
								'title' => 'Specialties',
								'text' => 'Front-end development, responsive design, state management, form handling, and animations.',
							],
							[
								'title' => 'Hobbies',
								'text' => 'Listening to Analog and High-res music, gaming occasionally, and playing stringed instruments.',
							],
							[
								'title' => 'If I wasn\'t a developer',
								'text' => 'I\'d be an engineer.'
							],
							[
								'title' => 'Favourite quote',
								'text' => '"Argue like you\'re right. Listen like you\'re wrong"',
							],
						],
						'hero_image' => [],
						'social_images' => [],
					],
						[
						'title'       => 'How I got into Web Development',
						'subtitle'    => '',
						'key' => 'got_into_web_dev',
						'content' => [
							[
								'title' => '',
								'text' => 'Since childhood, I’ve been an avid gamer that was always curious how it works and how pixels move around with such a small number of controls. Then I started to explore the trends in the browser and got into Friendster from my older cousins and friends. I was amazed when they have different styles of profiles unlike mine that is completely boring.<br /><br />At the end of high school, I\'m really not sure what to take, but I have a school in mind that I really wanted to attend to because of their exceptional engineers. I wanted to be an Electrical Engineer but was overwhelmed by its Mathematical subjects and was afraid since my dad passed away too early to guide me through. Well yes, I never knew IT had a decent amount of maths too! We\'re not rich enough to pay for this school, but my brother trusted me with his limited support. After the freshman phase, I decided to take a gap year and continue work until I could make it to the internship.<br /><br />University was difficult, I was overwhelmed by the amount of work and the pressure to perform well in subjects due to my status as a working student. I was fortunate enough to be accepted into the university and surrounded by awesome and passionate classmates and friends that are advanced in using technologies that I\'m trying to study. With these people, they pushed my limits to try and learn front-end development. They call me "Kevin, the frontend" as if I was knowledgeable enough (but of course not enough, yet) on the skill, and that\'s one of the best parts I consider as a pillar of my career development.<br /><br />As I made it to internship, I left the job that supports my university education to pursue my passion for the web. My leaders are really awesome and fully understood the purpose of signing up for the job. I was lucky enough to get hooked up with my thesis mates in a startup company that has a great mind, culture, and environment. From that point on, I learned a lot of techniques and different problems to solve as I grow towards web development.',
							],
						],
						'hero_image' => [],
						'social_images' => [],
					],
						[
							'title'       => 'Lessons from the Journey',
							'subtitle'    => '',
							'key' => 'lessons',
							'content' => [
								[
									'title' => 'Practice, practice',
									'text' => "Practice is not just about coding, but also about understanding the problem and finding the best solution. When getting online resource as an example, don't just watch it. Try to code with the coach, it kinda sounds bad but as you follow along, muscle memory will kick in and you'll be able to code faster and more efficiently without much thinking of the syntax but focusing on the problem itself.",
								],
								[
									'title' => 'Different preferences',
									'text' => "The code you write might be working, but it's not always the best solution. Every project or team has different preferences and requirements. The engineering part in coding is not just the logic, but also the art of problem-solving and communication. Structuring also plays a big role in refactoring for future +/- project features.",
								],
								[
									'title' => 'Always assume there will be changes',
									'text' => "That's why its called development! The development process is all about iterating and improving. You will always encounter bugs, unexpected behavior, and new requirements. It's important to be flexible and adapt quickly to changes. Embrace the process and learn from every experience.",
								],
								[
									'title' => 'Less is more',
									'text' => "More code does not always mean better code. It is always necessary to balance the functionality and maintainability. Over-engineering can lead to unnecessary complexity or worse \"the spaghetti code\" and makes everything harder to understand and maintain. Always keep it simple and focus on delivering value.",
								],
								[
									'title' => 'Testing is the key',
									'text' => "Testing is the key to delivering high-quality software. It helps identify bugs, edge cases, and unexpected behavior without countless testing on the browser. Writing tests ensures that your code works as expected and prevents regressions. But be mindful of tests that the users couldn't possibly know or care about that will take your tests further, as they might not be relevant to the end-users' experience.",
								],
								[
									'title' => 'TypeScript is your eagle eye',
									'text' => "Aside from TypeScript driving autocompletion and refactoring support that can save you time and effort, you can expect all the data transfer objects to be strongly typed, which lets your calls expect what it will receive and catch errors early in the development process. This leads to more reliable and maintainable code especially your declaration files are organized.",
								],
								[
									'title' => 'A Profane Quote from Ira Glass',
									'text' => '" Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer.<br /><br />And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn’t have this special thing that we want it to have. We all go through this.<br /><br />And if you are just starting out or you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story.<br /><br />It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met.<br/><br/>It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta fight your way through. "',
								]
							],
							'hero_image' => [],
							'social_images' => [],
						],
						[
							'title'       => 'Page not found',
							'subtitle'    => 'page you requested is either broken or does not exist',
							'key' => 'page_not_found',
							'content' => [],
							'hero_image' => [
								'me/webp/not-found.webp'
							],
						]
				];

				foreach($contents as $data) {
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

					$data['content'] = collect($data['content'])
						->map(fn (array $section) => [
							'title' => $section['title'] ?? '',
							'text' => $section['text'] ?? '',
						])
						->toArray();

					Content::create($data);
				}
    }
}
