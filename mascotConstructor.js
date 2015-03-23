var Mascot = function(name, food, endurance){
	this.name = name;
	this.food = food;
	this.endurance = endurance;
	this.totalDistance = 0;
	
	
}
this.run(endurance){
    var distance = Math.floor(Math.random()*endurance);
    console.log(this.name+" the "+this.food+" ran "+distance+" meters.")
}
//returns a variable called distance which is equal to a random number between 1 and the mascot's endurance
//logs to the console "NAME the FOODITEM ran DISTANCE meters!

var Barry = new Mascot ("barry", "burger", 8);
var Larry = new Mascot ("larry", "lasagna", 6);
var Cheech = new Mascot ("cheech", "churro", 7);
