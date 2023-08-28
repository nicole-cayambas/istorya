<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\StoryController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['permission:view_admin']], function () {
  Route::get('/', [AdminController::class, 'index'])->name('admin');
  Route::resource('stories', StoryController::class);
});
