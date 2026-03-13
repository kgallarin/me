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
        // TODO: make meta tags for SEO
            $defaults = [
                'locale' => app()->getLocale(),
                'description' => '',
                'title' => 'KGSPlayground',
                'keywords' => 'kevin gallarin, kgdev, frontend, developer',
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
