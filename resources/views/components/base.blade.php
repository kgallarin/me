<!DOCTYPE html>
<html lang="{{ $locale ?? ($appHeaders['locale'] ?? App::getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="csrf-token" content="{{ Session::token() }}">
	<meta name="description" content="{{ $description ?? ($appHeaders['description'] ?? '') }}">

	<meta name="keywords" content="{{ $keywords ?? ($appHeaders['keywords'] ?? '') }}">

	{{-- open graph links --}}
	<meta property="og:type" content="website"/>
	<meta property="og:title" content="{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'KGallarin')) }}"/>
	<meta property="og:description" content="{{ $description ?? ($appHeaders['description'] ?? '') }}"/>
	<meta property="og:url" content="{{ url()->current() }}"/>
	<meta property="og:image" content="{{ URL::asset('og-sharing.png') }}?v=1"/>
	<meta property="og:image:secure_url" content="{{ URL::asset('og-sharing.png') }}?v=1"/>
	<meta property="og:image:width" content="1200"/>
	<meta property="og:image:height" content="630"/>
	<meta property="og:image:type" content="image/png"/>
	<meta property="og:image:alt" content="{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'KGallarin')) }}"/>
	<meta property="og:site_name" content="{{ Config::get('app.name', 'KGallarin') }}"/>

	{{-- twitter card links --}}
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'KGallarin')) }}">
	<meta name="twitter:description" content="{{ $description ?? ($appHeaders['description'] ?? '') }}">
	<meta name="twitter:image" content="{{ URL::asset('og-sharing.png') }}?v=1">

	{{-- me:kgallarin --}}
	<link rel="me" href="https://github.com/kgallarin"/>
	<link rel="me" href="https://www.linkedin.com/in/kgallarin"/>

	<link rel="icon" type="image/png" href="{{ URL::asset('favicon-96x96.png') }}?v=2" sizes="96x96"/>
	<link rel="icon" type="image/svg+xml" href="{{ URL::asset('favicon.svg') }}?v=2"/>
	<link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('apple-touch-icon.png') }}?v=2"/>
	<meta name="apple-mobile-web-app-title" content="KGallarin"/>
	<link rel="manifest" href="{{ URL::asset('site.webmanifest') }}?v=2"/>

	<meta name="theme-color" content="#ffffff">

	{{--	<x-vite-font-preloads :fonts="[--}}
	{{--		'resources/fonts/ProximaNova/woff2/proxima-nova-light-webfont.woff2',--}}
	{{--		'resources/fonts/ProximaNova/woff2/proxima-nova-regular-webfont.woff2',--}}
	{{--	]" />--}}

	<title>{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'KGallarin')) }}</title>
	@if(request()->is('/'))
		<x-vite-preload
			:assets="[
				'resources/images/me/kg_art_1.webp',
				'resources/images/me/kg_art_2.webp',
			]"
			as="image"
			fetchpriority="high"
		/>
	@endif
	@stack('styles')
</head>
<body class="touch-my">
{{ $slot }}
@stack('scripts')
</body>
</html>
