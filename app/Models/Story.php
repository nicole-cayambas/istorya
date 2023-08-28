<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use ProtoneMedia\LaravelCrossEloquentSearch\Search;

class Story extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public static function allSearch($request)
    {
        return self::search(self::with('author'), $request);
    }

    public static function ownSearch($request)
    {
        // dd(Auth::user()->roles);
        return self::search(Auth::user()->with('stories'), $request);
    }

    public static function search($query, $request)
    {
        $results = Search::add($query, ['title', 'author.name', 'author.email'])
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
