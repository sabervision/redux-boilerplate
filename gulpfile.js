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