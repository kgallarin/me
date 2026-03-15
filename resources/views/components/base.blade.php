<!DOCTYPE html>
<html lang="{{ $locale ?? ($appHeaders['locale'] ?? App::getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="csrf-token" content="{{ Session::token() }}">
    <meta name="description" content="{{ $description ?? ($appHeaders['description'] ?? '') }}">
    <meta name="keywords" content="{{ $keywords ?? ($appHeaders['keywords'] ?? '') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ URL::asset('site.webmanifest') }}">

    <meta name="theme-color" content="#ffffff">

    <title>{{ $title ?? ($appHeaders['title'] ?? Config::get('app.name', 'loomberryliving')) }}</title>
    @stack('styles')
</head>
<body class="touch-my">
{{ $slot }}
@stack('scripts')
</body>
</html>
