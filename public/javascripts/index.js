(function(win, doc, $, undefined){
	"use strict";

    $(function(){
	    //call contructor for index view
        new IndexView();			
	});

	var IndexView = function(){
        var that = this,
            Ajax = require("./Ajax.js").Ajax,
            numberOfUsers = 100,
        
        //on progress, update the progress bar
        updateProgressBar = function(index){
            console.log(1 - (index / numberOfUsers));
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
