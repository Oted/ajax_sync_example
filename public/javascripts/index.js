(function(win, doc, $, undefined){
	"use strict";

    $(function(){
	    //call contructor for index view
        new IndexView();			
	});

	var IndexView = function(){
		this.Ajax = require("./Ajax.js").Ajax;
		this.User = require("./User.js").User;
	};

})(window, document, jQuery);
