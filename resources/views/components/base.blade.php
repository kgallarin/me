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

	{{-- me:kgallarin --}}
	<link rel="me" href="https://github.com/kgallarin"/>
	<link rel="me" href="https://www.linkedin.com/in/kgallarin"/>

	<link rel="icon" type="image/png" href="{{ URL::asset('favicon-96x96.png') }}" sizes="96x96"/>
	<link rel="icon" type="image/svg+xml" href="{{ URL::asset('favicon.svg') }}"/>
	<link rel="shortcut icon" href="{{ URL::asset('favicon.ico') }}"/>
	<link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('apple-touch-icon.png') }}"/>
	<meta name="apple-mobile-web-app-title" content="KGallarin"/>
	<link rel="manifest" href="{{ URL::asset('site.webmanifest') }}"/>

	<meta name="theme-color" content="#ffffff">

	<title>{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'KGallarin')) }}</title>
	@stack('styles')
</head>
<body class="touch-my">
{{ $slot }}
@stack('scripts')
</body>
</html>
