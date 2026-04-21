<?php

namespace Database\Seeders;

use App\Models\Recommendation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class RecommendationSeeder extends Seeder
{
    public function run(): void
    {
        $recommendations = [
            [
                'author'   => 'Diego R.',
                'title'    => 'Growth Strategist, Lead Innovator',
								'rating' => 5,
								'order' => 1,
                'text'     => 'Kevin has a natural gift to interpret an idea or concept. His work is unique, intelligent insight and has an ability to put the right emotion to the narrative. I would always want to work with him in any projects, big or small. <br /><br />His dedication, passion, excellence in work and attitude earned my utmost respect.',
                'linkedIn' => true,
                'avatar'   => 'kudos_avatar/webp/diego.webp',
            ],
						[
							'author'   => 'Camille D.',
							'title'    => 'Senior Graphic Designer, Fine Artist',
							'rating' => 5,
							'order' => 2,
							'text'     => 'I had the opportunity to work with Kevin when he was just starting out, and it’s been impressive to see him grow into a skilled and reliable web developer. He has a strong eye for design, along with the discipline and patience to continuously learn and improve his craft.<br /><br />Kevin is not only talented but also fun and easy to work with. He brings a positive energy to the team and has a way of making complex tasks feel seamless through his work.<br /><br />Any company would be lucky to have him.',
							'linkedIn' => true,
							'avatar'   => 'kudos_avatar/webp/camille.webp',
						],
						[
							'author'   => 'Irawin P.',
							'title'    => 'Lead UI/UX Designer',
							'rating' => 5,
							'order' => 3,
							'text'     => 'I have worked with many developers, but Kevin is easily one of the best partners a designer could ask for. As a Lead UX/UI Designer, I appreciate that Kevin does not just build to spec. He genuinely cares about the user experience. <br /><br />He is a guy who stays curious, constantly levels up his skills, and never backs down from a complex challenge. If you want someone who delivers pixel-perfect work and thrives on problem-solving, hire Kevin.',
							'linkedIn' => true,
							'avatar'   => 'kudos_avatar/webp/irawin.webp',
						],
						[
							'author'   => 'Max C.',
							'title'    => 'Senior Software Engineer',
							'rating' => 5,
							'order' => 4,
							'text'     => 'It is my pleasure and honor to recommend Kevin for the role of Frontend Developer. I have worked with Kevin for 2 years as his superior at Intelvalue Services, where he used his skills(vanilla js, css or framework) to create amazing layout in the role of Frontend Developer.<br /><br /> I am confident that Kevin\'s exceptional skills, experience, and personal qualities will make him a powerful asset at Optimail. As an Frontend Developer, kevin constantly demonstrated an extensive knowledge of JS & CSS skills and techniques, as well as superb communication skills.<br /><br />During his present in Intervalue Services, he managed to reduce the amount of time to complete the projects(frontend part) by 50% using his expertise. Also whenever there are problems or flaws in the layout, he showcases his superb analytical qualities to quickly identify the issue and solve it.<br /><br />Kevin has my highest recommendation for this position. I have no doubt he will make a strong addition to your team.',
							'linkedIn' => false,
							'avatar'   => 'kudos_avatar/webp/max.webp',
						],
						[
							'author'   => 'Ele S.',
							'title'    => 'Project Manager',
							'linkedIn' => false,
							'rating' => 5,
							'order' => 5,
							'text'     => 'I worked with Kevin in my role as a Project Manager at Moebius Development Inc., where he was part of the team as a Frontend Developer. He was consistently reliable, delivered high-quality work, and took strong ownership of his responsibilities.<br /><br />He played a key role in developing our newest website template, demonstrating strong technical skills and excellent attention to detail. In addition, he was helpful, which made collaboration easy.<br /><br />I enjoyed working with him and would gladly recommend him.',
							'avatar'   => 'kudos_avatar/webp/ele.webp',
						],
						[
							'author'   => 'Brian M.',
							'title'    => 'Full Stack Developer',
							'rating' => 5,
							'order' => 6,
							'text'     => 'During the time we worked together, Kevin consistently demonstrated strong technical skills and professionalism. <br /><br />He contributed to the development and maintenance of frontend features, helping deliver clean, functional, and user-friendly interfaces.<br /><br />He was dependable on meeting deadlines and handled technical challenges with a practical and solution-oriented approach. Kevin was also a collaborative team member who communicated effectively with colleagues and worked well within the development team.<br /><br />His ability to adapt to project needs and contribute reliably made him a valuable part of the team.<br /><br />Although we are no longer affiliated with the company, I can confidently recommend Kevin for frontend development roles. I believe he will be a strong addition to any development team.',
							'linkedIn' => false,
							'avatar'   => 'kudos_avatar/webp/brian.webp',
						],
						[
							'author'   => 'Nida S.',
							'title'    => 'HR Manager',
							'rating' => 5,
							'order' => 7,
							'text'     => 'While I did not manage his technical output directly, I had the opportunity to oversee his professional journey from an HR perspective and interact with him regularly within the office environment. Throughout his time here, Mr. Kevin Morales Gallarin distinguished himself as a reliable and highly professional individual. <br /><br /> What stands out most about Mr. Kevin Morales Gallarin is his contribution to workplace harmony. He possesses a calm and collaborative demeanor that makes him a pleasure to work with. He handles his responsibilities with integrity and maintains a positive attitude that naturally improves the team dynamic. <br /><br />It was truly a nice experience getting to know him and having him as part of our staff. I am confident that his future colleagues will find the working experience with him just as pleasant as we did.',
							'linkedIn' => false,
							'avatar'   => 'kudos_avatar/webp/nida.webp',
						],
            [
                'author'   => 'Chang S.',
                'title'    => 'Software Tester/Engineer',
								'rating' => 5,
								'order' => 8,
                'text'     => 'Kevin is a good frontend developer, we worked together in an international gaming company. As he worked independently, the page he developed was not many issues compared with the other developers<br /><br />He is a good communicator with me or other international co-workers when it comes to projects or tasks, I am glad to work with him',
                'linkedIn' => false,
                'avatar'   => 'kudos_avatar/webp/chang.webp',
            ],
						[
							'author'   => 'Durant D.',
							'title'    => 'Artist, UI/UX Designer',
							'rating' => 5,
							'order' => 9,
							'text'     => 'Kevin is a great work partner, easy to get along with, has a wide range of interests, is very hardworking and reliable, and is a trustworthy teammate. <br /><br /> Outside of work, he\'s also a wonderful travel buddy.',
							'linkedIn' => false,
							'avatar'   => 'kudos_avatar/webp/durant_djc.webp',
						],
        ];

        foreach ($recommendations as $data) {
            $avatarPath = $data['avatar'];

            $data['avatar'] = [
                'url' => Storage::disk('s3')->url($avatarPath),
                'alt' => "{$data['author']} avatar",
            ];

            Recommendation::create($data);
        }
    }
}
