<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use ProtoneMedia\LaravelCrossEloquentSearch\Search;

class Story extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public static function search($request)
    {
        $results = Search::add(self::with('author'), ['title', 'author.name', 'author.email'])
            ->beginWithWildcard()
            ->paginate($perPage = 15)
            ->search($request->search);
        return $results;
    }

    public static function featured()
    {
        //
    }
}
