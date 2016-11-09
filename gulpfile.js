var gulp = require('gulp');
var webpack = require('webpack-stream');



gulp.task('scripts', function() {
	return gulp.src('./app/app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./build'))
	;
});

gulp.task('html', function() {
	return gulp.src('./src/**/**.html')
		.pipe(gulp.dest('./build'))
	;
})


// run the 'scripts' and 'html' tasks before the function
// if changes in **.js, update scripts
// if changes in **.html, update html
gulp.task('default', ['scripts', 'html'], function() {
	gulp.watch('./src/app/**/**.js', ['scripts']);
	gulp.watch('./src/**/**.html', ['html']);
});