<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginAuth extends Controller
{
    public function login(Request $request)
    {
        try{
            $request->validate([
                'email'=> 'required|string',
                'password'=> 'required|string',
            ]);

            $info = $request->only('email','password');

            $user = User::where('email',$info['email'])->first();



            if($user && Hash::check($request->password,$user->password)){

                Auth::login($user);

                $token =$request->session()->token();


                $id = $user->id_usuario;

                return response()->json([
                    'id'=>$id,
                    'token'=>$token
                ],200);

            }

        }catch(ModelNotFoundException $e){
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
