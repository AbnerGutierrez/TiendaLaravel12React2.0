<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'rol:admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::controller(AdminController::class)->group(function () {
        Route::get('users', 'users')->name('users');
        Route::get('user/create', 'userShowCcreate')->name('userShowCcreate');
        Route::post('user/create', 'userCreate')->name('userCreate');
        Route::get('user/details/{idUser}', 'editUser')->name('userDetails');
        Route::put('uaser/editar/{idUser}', 'updateUser')->name('users.update');
        Route::delete('delete', 'guestDelete')->name('users.guest.delete');

        Route::get('dashboard', 'dashboard')->name('dashboard');

        Route::get('products', 'products')->name('products');
        Route::get('products/create', 'addProducts')->name('products.add');
    });
});
