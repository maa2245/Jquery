function MoviesToPage(MovieData){
	
	// Here I am going to console log the names of the first movie in my list. If I am successful, the words "Lego Movie"
	//should show up in my console.
	console.log(MovieData.myMovies[0].name);
	
}
	
// This is a function that I have called loadMovies. This is the one that I am going to use in document.ready to later.
function loadMovies(){

// Here I am creating a div using a variable. I will call it MyMovieDiv.
var myMovieDiv = $("<div>");

// Now I am going to add some text to my html using JQuery. If I am successful, the words This is my Jquery div should show
// up in my browser...They did. 
$(myMovieDiv).html("this is my JQuery div");
$("#myMovieContainer").append(myMovieDiv); 

// finally now I am asking jquery to get my json list for me. First I am going to list the name of my list
// which is MovieList.sjon. Then I am going to list the name of my function, which is MoviesToPage. Finally, I am 
//going to list the name of my file type as a string, which is json.
$.get("MovieList.json", MoviesToPage, "json");



}

// In order for all of this to kick off, I have to use document.ready. I will write loadMovies in the parantheses
// because that's the name of my function.
$(document).ready(loadMovies);
