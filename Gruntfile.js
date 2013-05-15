module.exports = function(grunt){
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-contrib-livereload");
	grunt.loadNpmTasks("grunt-regarde");

	grunt.initConfig({
		handlebars: {
			compile: {
				options: {
					processName: function(filename){
						return filename.substr( filename.lastIndexOf("/")+1 ).match(/(.+?)\.html/)[1];
					}
				},
				files: {
					"app/assets/javascripts/templates.js": "js_template_src/**/*.html"
				}
			}
		},

		regarde: {
			template: {
				files: ["js_template_src/**/*.html"],
				tasks: ["handlebars"]
			},
			livereload: {
				files: ["app/**/*"],
				tasks: ["livereload"]
			}
		}
	});

	grunt.registerTask('default', ["livereload-start", "regarde"]);
}