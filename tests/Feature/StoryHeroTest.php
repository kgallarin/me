<?php

namespace Tests\Feature;

use App\Models\StoryHero;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StoryHeroTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_query_story_hero(): void
    {
        StoryHero::create([
            'id' => \Illuminate\Support\Str::uuid(),
            'title' => 'Test Title',
            'subtitle' => 'Test Subtitle',
            'description' => 'Test Description',
            'hero_image' => [
                ['url' => 'https://example.com/hero.jpg', 'alt' => 'Hero Alt'],
            ],
            'social_images' => [
                ['url' => 'https://example.com/social.jpg', 'alt' => 'Social Alt'],
            ],
        ]);

        $query = '
        {
            storyHero {
                id
                title
                subtitle
                description
                heroImages {
                    url
                    alt
                }
                socialImages {
                    url
                    alt
                }
            }
        }
        ';

        $response = $this->postJson('/graphql', [
            'query' => $query,
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'storyHero' => [
                        'title' => 'Test Title',
                        'heroImages' => [
                            ['url' => 'https://example.com/hero.jpg', 'alt' => 'Hero Alt'],
                        ],
                        'socialImages' => [
                            ['url' => 'https://example.com/social.jpg', 'alt' => 'Social Alt'],
                        ],
                    ],
                ],
            ]);
    }

    public function test_story_hero_returns_empty_arrays_if_null(): void
    {
        StoryHero::create([
            'id' => \Illuminate\Support\Str::uuid(),
            'title' => 'Test Title',
            'subtitle' => 'Test Subtitle',
            'description' => 'Test Description',
            'hero_image' => null,
            'social_images' => null,
        ]);

        $query = '
        {
            storyHero {
                heroImages {
                    url
                    alt
                }
                socialImages {
                    url
                    alt
                }
            }
        }
        ';

        $response = $this->postJson('/graphql', [
            'query' => $query,
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'storyHero' => [
                        'heroImages' => [],
                        'socialImages' => [],
                    ],
                ],
            ]);
    }
}
