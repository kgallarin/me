@php
	$manifest = [];
	$manifestPath = App::publicPath('build/manifest.json');
	if (file_exists($manifestPath)) {
		$manifest = json_decode(file_get_contents($manifestPath), true, 512, JSON_THROW_ON_ERROR) ?? [];
	}
@endphp
@foreach($assets as $key)
	@if(isset($manifest[$key]))
		<link
			rel="preload"
			href="{{ URL::asset('build/' . $manifest[$key]['file']) }}"
			as="{{ $as }}"
			@if(!empty($type)) type="{{ $type }}" @endif
			@if(!empty($fetchpriority)) fetchpriority="{{ $fetchpriority }}" @endif
			@if($as === 'font') crossorigin @endif
		>
	@endif
@endforeach
