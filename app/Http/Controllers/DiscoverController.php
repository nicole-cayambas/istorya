<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Inertia\Inertia;

class DiscoverController extends Controller
{
    public function index()
    {
        return Inertia::render('Discover/Index', [
            'trending_stories' => Story::all(), // TODO: analytics
            'featured_stories' => Story::all(), // TODO: release cycles
        ]);
    }
}
