<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
	protected $table = 'categories';

	protected $fillable = ['animal','flagsnicons','games','misc','movie','mythology','people','pokemon','popart','tv'];


    public function image(){
    	return $this->hasMany('App\Image');
    }
}