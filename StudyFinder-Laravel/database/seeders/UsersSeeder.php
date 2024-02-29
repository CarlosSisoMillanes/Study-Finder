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
        'nombre'=> 'dacaho',
        'apellidos'=> 'dfdsfds',
        'email'=> 'dacaho@gmail.com',
        'direccion'=> 'dfdsfd',
        'telefono'=> 'fdsfds',
        'facebook'=> 'dfdfsd',
        'instagram'=> 'dfsdfds',
        'password'=> Hash::make('12345'),
        'estado'=> 'f',
        'rol'=> 's',
    ]);
    }
}
