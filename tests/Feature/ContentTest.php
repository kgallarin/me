<?php

namespace Tests\Feature;

use App\Models\Content;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContentTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_query_content(): void
    {
        Content::create([
            'id' => \Illuminate\Support\Str::uuid(),
            'key' => 'test-hero',
            'title' => 'Test Title',
            'subtitle' => 'Test Subtitle',
            'text' => 'Test Description',
            'hero_image' => [
                ['url' => 'https://example.com/hero.jpg', 'alt' => 'Hero Alt'],
            ],
            'social_images' => [
                ['url' => 'https://example.com/social.jpg', 'alt' => 'Social Alt'],
            ],
        ]);

        $query = '
        {
            content(key: "test-hero") {
                id
                title
                subtitle
                text
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
                    'content' => [
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

    public function test_content_returns_empty_arrays_if_null(): void
    {
        Content::create([
            'id' => \Illuminate\Support\Str::uuid(),
            'key' => 'test-hero-empty',
            'title' => 'Test Title',
            'subtitle' => 'Test Subtitle',
            'text' => 'Test Description',
            'hero_image' => null,
            'social_images' => null,
        ]);

        $query = '
        {
            content(key: "test-hero-empty") {
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
                    'content' => [
                        'heroImages' => [],
                        'socialImages' => [],
                    ],
                ],
            ]);
    }
}
