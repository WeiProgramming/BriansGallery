<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//get all the images
Route::get('/category','ImagesController@index');

//get the selected images
Route::get('/category/{id}', 'ImagesController@getImages');


// Route::group(['middleware'=>'auth:web'],function(){
	//show page to upload file
	Route::get('/admin/upload',['as'=>'showuploadform', 'uses' => 'ImagesController@showUploadPage']);

	//send upload data to database
	Route::post('/admin/upload',['as'=> 'storedata', 'uses' => 'ImagesController@storeUpload']);

// }) ;