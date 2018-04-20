<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Category;

class ImagesController extends Controller
{
	public function index(){
		$categories = Category::find(1)->image;
		return $categories;
	}
}
