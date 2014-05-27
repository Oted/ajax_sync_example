(function(win, doc, $, undefined){
	"use strict";

    //on document ready, load the view
    $(function(){
	    //call contructor for first page view
        new IndexView();
    });

	var IndexView = function(){
        var Ajax = require("./Ajax.js").Ajax,
            User = require("./User.js").User,
            numberOfUsers = 100,
            ajax,
        
        //on progress, update the progress bar
        updateProgressBar = function(index){
            console.log("User " + index + " loaded");
            $("#progress-bar").progressbar({
                "value": Math.ceil((1 - (index / numberOfUsers)) * 100)
            });
        },

        //on finish, display all results
        showResults = function(users){
            for (var i = users.length - 1; i >= 0; i--){
                //create a new user.
                new User(users[i]);
            }

            document.getElementById("progress-bar").style.display = "none";
        };
        
        
        //add listener to button click 
        document.getElementById("start-button").onclick = function(event){
            //reset properties
            document.getElementById("progress-bar").style.display = "";
            document.getElementById("user-container").innerHTML = "";
                        
            //create a new ajax object
            ajax = new Ajax(showResults, updateProgressBar);

            //run ajax
            ajax.start(numberOfUsers); 
            event.preventDefault();
        };
    };
})(window, document, jQuery);
