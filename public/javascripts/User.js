(function(win, doc, $, undefined){
	"use strict";

	//constructor for User, this creates a new user element and append it to the DOM
	var User = function(userObj){
        var userContainer = document.getElementById("user-container"),
            newUser = document.createElement("li"),
            userGlyphicon = document.createElement("span"),
            userText = document.createElement("span"),
            userStatus = document.createElement("span");
        
            userText.className = "user-info";
            userStatus.className = "user-info";
            userGlyphicon.className = "glyphicon glyphicon-user";
            userText.innerHTML = userObj.id;
        
        if (userObj.online){
            userStatus.className = "green";
            userStatus.innerHTML += "online";
        } else {
            userStatus.className = "red";
            userStatus.innerHTML += "offline";
        }
        
        newUser.appendChild(userGlyphicon);
        newUser.appendChild(userText);
        newUser.appendChild(userStatus);
        userContainer.appendChild(newUser);
	};

	exports.User = User;
})(window, document, jQuery);
