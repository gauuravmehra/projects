// Grunt code
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        concat: {
             dist: {
				src: [
					'js/libs/*.js', // All JS in the libs folder
					'js/global.js'  // This specific file
				],
				dest: 'js/build/production.js',
			}
        },
		
		less: {
			development: {
			//options: {
			//	paths: ["assets/css"]
			//},
				files: {
				  "css/bootstrap.css": "less/app.less"
				}
			}
		},
		watch:{
			
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);

};