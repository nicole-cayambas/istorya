<?php

use App\Http\Controllers\StoryController;
use Illuminate\Support\Facades\Route;

Route::resource('stories', StoryController::class);
