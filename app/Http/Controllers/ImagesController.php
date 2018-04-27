<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Category;

class ImagesController extends Controller
{
	//show all images
	public function index(){
		$images = Image::all();
		return $images;
	}

	//show specific images
	public function getImages($id){
		$categoryImages = Category::find($id)->image;
		return $categoryImages;
	}

	//show upload page
	public function showUploadPage(){
		return view('upload-page');
	}

	//store upload data to db
	public function storeUpload(Request $request){
		dd($request->file);
		return redirect()->route('home');
	}
}
