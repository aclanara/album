<?php

use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Rota Página Inicial
Route::get('/', [PhotoController::class,'index']);
Route::get('/dashboard', [PhotoController::class,'index']);

Route::middleware(['auth'])->group(function (){

  //Rota que exibe as fotos do usuario
  Route::get('/photos',[PhotoController::class,'showAll']);

  //Rota que exibe o formulário de cadastro
  Route::get('/photos/new', [PhotoController::class, 'create']);

  //Rota que exibe o formulário de edição
  Route::get('/photos/edit/{id}', [PhotoController::class, 'edit']);

  //Rota que insere no banco de dados uma nova foto
  Route::post('/photos', [PhotoController::class, 'store']);

  //Rota que altera uma foto no banco de dados
  Route::put('/photos/{id}', [PhotoController::class, 'update']);

  //Rota que exclui uma foto do banco de dados
  Route::delete('/photos/{id}', [PhotoController::class, 'destroy']);

});
