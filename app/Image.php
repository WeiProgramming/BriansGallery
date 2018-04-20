<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
	protected $table = 'images';

	protected $fillable = ['category_id','src','thumbnailWidth','thumbnailHeight','caption'];
    //create a one to many relationship with category table,, images belongsto one category, categor hasmany images
    public function category(){
    	return $this->belongsTo('App\Category');
    }
}
