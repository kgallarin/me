<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('index');
//});
// Serve the SPA for all non-Api routes; Vue Router will handle client-side routing
Route::view('/{any?}', 'index')
	->where('any', '^(?!api).*$');
