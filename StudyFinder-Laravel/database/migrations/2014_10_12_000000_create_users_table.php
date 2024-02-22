<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_usuario',14);
            $table->string('nombre',40);
            $table->string('apellidos',30);
            $table->string('direccion',100)->nullable();
            $table->string('telefono',15)->nullable();
            $table->string('facebook',30)->nullable();
            $table->string('instagram',30)->nullable();
            $table->string('rol',1)->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('estado',1)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
