<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Vite;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::composer('*', static function ($view) {
            $defaults = [
                'locale' => app()->getLocale(),
                'description' => 'Frontend Developer, Front-end Engineer, Laravel/GraphQL Full-Stack Capable',
                'title' => 'KGallarin - Frontend Developer',
                'keywords' => 'kevin gallarin, kgdev, frontend, developer, kgallarin, kgallarin.com',
            ];

            $existing = $view->getData()['appHeaders'] ?? [];
            if (!is_array($existing)) {
                $existing = [];
            }

            $view->with('appHeaders', array_replace($defaults, $existing));
        });

        Vite::useScriptTagAttributes(attributes: [
            'integrity' => false,
            'async' => true,
        ]);
    }
}
