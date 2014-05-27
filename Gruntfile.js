//grunt settings and config
module.exports = function(grunt){
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: "public/stylesheets/sass/",
                    cssDir: "public/stylesheets/css/",
                    httpPath : "/"
                }
            }
        },
		browserify : {
			default : {
				files : {
					"public/script.js" : 	["public/javascripts/index.js", "public/javascripts/user.js", "public/javascript/ajax.js"],
                }	
			}
		},
		watch : {
			script : {
				files : ["public/javascripts/*.js"],
				tasks : ["browserify"]
			},
			options: {
         	   livereload: 1338,
			   atBegin : true
        	},
        	css: {
          		files: ["public/stylesheets/sass/*.scss"],
          		tasks: ["compass"]
        	}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask("default",["browserify","compass"]);
	grunt.loadNpmTasks('grunt-contrib-compass');
};
