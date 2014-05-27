(function(win, doc, $, undefined){
	"use strict";

    $(function(){
	    //call contructor for first page view
        new IndexView();			
    });

	var IndexView = function(){
        var Ajax = require("./Ajax.js").Ajax,
            numberOfUsers = 100,
        
        //on progress, update the progress bar
        updateProgressBar = function(index){
            $("#progress-bar").progressbar({
                "value": Math.ceil((1 - (index / numberOfUsers)) * 100)
            });
        },

        //on finish, display all results
        showResults = function(results){
            console.log("done!");
            console.log(results);
        },

        ajax = new Ajax(showResults, updateProgressBar);
        
        //add listener to button click 
        document.getElementById("start-button").onclick = function(event){
            ajax.start(numberOfUsers); 
            event.preventDefault();
        };
    };

})(window, document, jQuery);
