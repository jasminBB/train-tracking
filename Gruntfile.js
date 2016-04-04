module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),	

		watch: {
			files: [
				"public/*.html",
				"public/components/*"
			],
			tasks: ['default']
		},

		concat: {
			libjs: {
				src: [
					'node_modules/jquery/dist/jquery.js',
					'node_modules/angular/angular.js',
					'node_modules/angular-aria/angular-aria.js',
					'node_modules/angular-animate/angular-animate.js',
					'node_modules/angular-messages/angular-messages.js',
					'node_modules/angular-material/angular-material.js',
					'node_modules/angular-route/angular-route.js'
				],
				dest: 'public/assets/scripts/libjs.js'
			},
			libcss: {
				src: ['node_modules/angular-material/angular-material.css'],
				dest: 'public/assets/css/libcss.css'
			},
			ucss: {
				src: ['public/components/sass/*'],
				dest: 'public/assets/css/ucss.css'
			},
			ujs: {
				src: [
					'public/components/directives/*',
					'public/components/scripts/*',
					'public/components/controllers/*'
				],
				dest: 'public/assets/scripts/ujs.js'
			}
		},

		sass: {
			dist: {
				files: {
					'public/assets/css/ucss.css': 'public/components/sass/*.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: 'public',
					hostname: '*'
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['sass', 'concat', 'connect', 'watch']);

};