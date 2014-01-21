// Grunt code
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        less: {
			options: {
			  compress: true,
			  yuicompress: true
			},
			development: {
				files: {
					"css/app.css": "less/app.less"
				}
			}
		},
		watch:{
			styles: {
			// Which files to watch (all .less files recursively in the less directory)
			files: ['less/*.less'],
			tasks: ['less:development'],
			options: {
			  nospawn: true
			}
		  }
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['concat']);
	grunt.registerTask('watch-less', ['watch']);
};