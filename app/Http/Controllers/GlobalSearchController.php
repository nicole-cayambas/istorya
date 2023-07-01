<?php

namespace App\Http\Controllers;

use App\Http\Requests\GlobalSearchRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlobalSearchController extends Controller
{
    public function index(GlobalSearchRequest $request)
    {
        $results = $request->results();
        return Inertia::render('Search/Index', [
            'stories' => $results['stories'],
            'users' => $results['users']
        ]);
    }
}
