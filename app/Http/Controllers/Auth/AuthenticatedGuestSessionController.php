<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthenticatedGuestSessionController extends Controller
{
    public function create()
    {

        $user = User::create([
            'name' => 'Invitado_' . Str::random(5),
            'email' => Str::random(10) . '@guest.com',
            'password' => bcrypt(Str::random(20)),
            'is_guest' => true,
            'guest_expires_at' => now()->addHours(2),
        ]);

        Auth::login($user);

        return redirect()->intended(route('dashboard', absolute: false));
    }
}
