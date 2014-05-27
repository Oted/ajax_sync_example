"use strict";

//wrapping module for the ajax communication, callbacks for progress and done 
//are injected, when all requests has been made the done callback gets the result of all the statuses of 
//the users.
var Ajax = function(done, progress){
    var results = [];
    
    //starts the sync ajax calls
    this.start = function(numberOfUsers){
        getUser(numberOfUsers);
    };

    //clears the result
    this.clear = function(){
        results = [];
    };
 
    //get user, recursive function
    var getUser = function(index){
        if (index > 0){
            $.ajax({
                "url": "/users",
                "type": "POST",
                "data": {"id" : index},
                "success": function(data){
                    //save the data on progress
                    results.push(data);

                    //notify the view of the progress
                    progress(index);

                    //recurse down towards 0
                    getUser(--index);
                }
            });
        } else {
            done(results);
        }
    };
};

exports.Ajax = Ajax;
