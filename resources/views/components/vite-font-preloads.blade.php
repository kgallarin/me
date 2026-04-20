@php
	$manifest = [];
	$manifestPath = App::publicPath('build/manifest.json');
	if (file_exists($manifestPath)) {
		$manifest = json_decode(file_get_contents($manifestPath), true, 512, JSON_THROW_ON_ERROR) ?? [];
	}
@endphp
@foreach($fonts as $fontKey)
	@if(isset($manifest[$fontKey]))
		<link rel="preload" href="{{ URL::asset('build/' . $manifest[$fontKey]['file']) }}" as="font" type="font/woff2"
		      crossorigin>
	@endif
@endforeach
