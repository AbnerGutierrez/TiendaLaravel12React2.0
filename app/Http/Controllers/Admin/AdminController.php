<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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

    public function users()
    {
        $usuarios = User::get();
        return Inertia::render('admin/UsersIndex', ['users' => $usuarios]);
    }

    public function editUser($idUser)
    {
        $usuario = User::with('roles')->findOrFail($idUser);
        // dd($usuario);
        return Inertia::render('admin/EditUser', ['user' => $usuario]);
    }

    public function updateUser($idUser, Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
        ]);

        try {

            $usuario = User::findOrFail($idUser);

            $usuario->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            return redirect()->route('admin.users')
                ->with('success', 'El usuario se actualizó correctamente');
        } catch (\Exception $e) {

            Log::error(
                'Error al actualizar el usuario: ' . $e->getMessage()
            );

            return back()->with(
                'error',
                'El usuario no se logró actualizar'
            );
        }
    }

    public function guestDelete()
    {
        try {

            User::where('is_guest', 1)->delete();

            return back()->with(
                'success',
                'Los usuarios se eliminaro conrrectamente'
            );
        } catch (\Exception $e) {
            Log::error('Error al eliminar los usuarios invitados' . $e->getMessage());
            return back()->with(
                'error',
                'Los usuarios no se lograron eliminar'
            );
        }
    }
}
