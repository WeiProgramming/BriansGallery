<!doctype html>
<html lang="{{ app()->getLocale() }}">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
      <title>Laravel</title>
      <!-- Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
   </head>
   <body>
      <div class = "container">
         <form method ="POST" action= "{{route('storedata')}}">
            <fieldset>
               <legend>Upload Information: </legend>
               <div class="form-group">
                  <label for ="categories">Categories</label>
                  <select name ="categories">
                     <option value = "animal">Animal</option>
                     <option value = "fni">Flags and Icons</option>
                     <option value = "">Games</option>
                     <option value = "misc">Misc</option>
                     <option value = "movie">Movie</option>
                     <option value = "mythology">Mythology</option>
                     <option value = "people">People</option>
                     <option value = "pokemon">Pokemon</option>
                     <option value = "popup">PopUp</option>
                     <option value = "tvshows">TV Shows</option>
                  </select>
               </div>

               <div class = "form-group">
                  <label for = "caption">Caption</label>
                  <input name ="caption" type ="text" maxlength="150"/>
               </div>

               <div class="form-group">
                  <label for ="file">Upload File</label>
                  <input type ="file" name ="file"/>
               </div>

               <div class = "form-group">
                   <input class ="btn btn-primary" type = "submit"/>
               </div>

            </fieldset>
         </form>
      </div>
   </body>
</html>
