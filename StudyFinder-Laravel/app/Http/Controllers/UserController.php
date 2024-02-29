<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;


class UserController extends Controller
{
    //
    protected function index(){


        return User::all();
    }

    protected function store(Request $request){

    }
}
