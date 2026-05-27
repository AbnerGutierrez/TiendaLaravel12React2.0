<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function products()
    {
        return Inertia::render('admin/AdminProducts');
    }

    public function addProducts()
    {
        return Inertia::render('admin/AddProducts');
    }

    public function store(Request $request)
    {
        dd($request);
    }
}
