<?php

namespace App\Traits;

trait ScopesRecent
{
	protected function scopeRecent($query)
	{
		return $query->orderBy('created_at', 'desc');
	}
}
