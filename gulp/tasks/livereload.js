var gulp = require('gulp');
var livereload = require('gulp-livereload');

//livereloadサーバへ変更通知を行い、ブラウザのリロードを行う。
gulp.task('reload', function(){
	gulp.src(['public/*/*','views/*']).pipe(livereload());
											 });

gulp.task('livereload',['server'],function(){
  livereload.listen();
	//サーバ再起動の対象にするファイル
	gulp.watch(['js/*.js','app.js','routes/*'],['server']);
	//ブラウザリロードの対象にするファイル
	gulp.watch(['public/*/*','views/*'],['reload']);
												 })
