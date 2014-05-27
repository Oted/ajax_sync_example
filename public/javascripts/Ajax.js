"use strict";

var Ajax = function(done, progress){
    var results = [];
    
    //starts the sync ajax calls
    this.start = function(numberOfUsers){
        getUser(numberOfUsers);
    };
 
    //get user, recursive function
    var getUser = function(index){
        if (index >= 0){
            $.ajax({
                "url": "/users",
                "type": "POST",
                "data": index,
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
