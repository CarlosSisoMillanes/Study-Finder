<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
        'nombre'=> 'fdsfds',
        'apellidos'=> 'dfdsfds',
        'email'=> 'fdsfds',
        'direccion'=> 'dfdsfd',
        'telefono'=> 'fdsfds',
        'facebook'=> 'dfdfsd',
        'instagram'=> 'dfsdfds',
        'password'=> Hash::make('dfsfd'),
        'estado'=> 'f',
        'rol'=> 's',
    ]);
    }
}
