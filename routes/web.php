<?php

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('index');
//});
// Serve the SPA for all non-Api routes; Vue Router will handle client-side routing
Route::view('/{any?}', 'index')
	->where('any', '^(?!api).*$');


Route::post('/deploy-webhook', function (Request $request) {
    if ($request->header('X-Hub-Signature') !== config('app.deploy_secret')) {
        abort(Response::HTTP_UNAUTHORIZED, 'Unauthorized');
    }

    $output = shell_exec('/bin/bash /var/www/kgpersonal/deploy.sh 2>&1');

    return response()->json([
        'status' => 'success',
        'output' => $output
    ]);
});