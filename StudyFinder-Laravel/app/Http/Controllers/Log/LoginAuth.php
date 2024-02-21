<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginAuth extends Controller
{
    public function login(Request $request){

        $request->validate([
            'nombre'=> 'required|string|max:40',
            'password'=> 'required|string',
        ]);

        $info = $request->only('nick','password');

        $user = User::where('nombre',$info['nombre'])->first();

        if($user && Hash::check($info['password'],$user->password)){

            Auth::login($user);
            return response()->json($user,200);

        }else{
            return response()->json(['error'=>'usuario/contraseña incorrecto'],404);
        }

    }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
