<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index', [
            'filters' => Request::all('search'),
            'categories' => Category::with(['rooms' => function ($query) {
                $query->filter(Request::only('search'));
            }])->get(),
            'private_rooms' => Auth::user()->rooms()
                ->filter(Request::only('search'))
                ->get(),
        ]);
    }
}
