import React,{Component} from 'react';

function HomeScreen(){ 
	return (
		<div className = "screen slide">
			<h1>Home</h1>
			<hr className="style-seven"/>
			<div className = "row">
				<div className = "col-md-8">
					<p>
						Hey, my name’s Brian and here’s my stuff. It all really started in 
						8th grade with some doodling and someone said, “Hey! That looks like a face.” 
						I then started drawing in the rest, trying to make some kind of goblinish thing. 
						I began experimenting with this mosaic/stained glass esque style with some basic 
						animals and such. Over the years I’ve done more and more trying out different subjects,
						 but still focusing on a few specific styles I like to do. It’s mainly because I can’t shade
						  for shit, but my friends I had and new ones I made really liked it and thought it was cool. 
						  	I like making new pictures for myself, but I really love making them for my friends so they 
						  can have some art and pretty things to put on their walls. 
					</p><br/>
					<p>
						Oh, also there’s the other style of art I like to do with all the lines and random figures. 
						That was pretty much inspired by a 7th grade art project I had to do. The teacher had us draw a lunch on 
						lines depending on random descriptions she made. After we had to fill it in however we wanted. So every 
						now and then I like to take a break from my main style and do this type of drawing.
					</p>
				</div>

				<div className ="col-md-4">
					<div> 
						<img src ="images/grad-pic.jpg" 
						className = "img-thumbnail"/>
					</div>
					<div> 
						<img src ="images/halloween-costume.jpeg"
						className = "img-thumbnail"/>
					</div>
					<div> 
						<img src ="images/mirror-selfie.jpg"
						className = "img-thumbnail"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;