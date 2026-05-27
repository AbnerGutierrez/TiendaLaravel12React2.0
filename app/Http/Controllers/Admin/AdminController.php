<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\cat_roles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function dashboard()
    {
        return Inertia::render('admin/AdminDashboard', [
            'config' => [
                'color' => '#4f46e5',
                'intervalo' => 500 // ms
            ]
        ]);
    }

}
