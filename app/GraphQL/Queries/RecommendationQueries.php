<?php

namespace App\GraphQL\Queries;

use App\Models\Recommendation;
use Illuminate\Database\Eloquent\Collection;

class RecommendationQueries
{
    public function find(mixed $_, array $args): ?Recommendation
    {
        return Recommendation::find($args['id']);
    }
}
