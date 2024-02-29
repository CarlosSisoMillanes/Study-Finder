<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterAuth extends Controller
{
    //
    public function register(Request $request){

        $request->validate([
            'nombre'=>'required|string|max:30',
            'apellidos'=>'required|string|max:50',
            'email'=>'required|email|unique:users',
            'password'=>'required|string',
        ]);

        User::create($request->all());



        return response()->json(['usuario registrado'],200);

    }
}
