<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Category;
use App\Mail\Question;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\EmailValidator;

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
		return redirect()->route('home');
	}

	public function sendEmail(EmailValidator $request){
		// Mail::to('wei.leung1995@gmail.com')->send(new Question($request));
		Mail::send('emails.message',['subject'=>$request->subject,'body'=>$request->body, 'email'=>$request->email],
			function($message) use ($request){
				$message->from($request->email);
				$message->to('john@gmail.com');
				$message->subject($request->subject);
			});
		return response()->json(['message'=>'success']);
	}
}