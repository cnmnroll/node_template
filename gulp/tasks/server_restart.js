var gulp = require('gulp');
var spawn = require('child_process').spawn;
var server;

gulp.task('server',function(){
	if(server){
		//サーバーが起動していたら終了
		server.kill('SIGKILL');
		server=undefined;
	}
	//サーバーを起動。npm startと同じ。私の環境がwindowsなのでこうしてる。
	server = spawn('node',['start']);
	　　　//console.logとかをコンソールに表示
	server.stdout.setEncoding('utf8');
	server.stdout.on('data',function(data){
		console.log(data);
	});
//エラーをコンソールに表示
	server.stderr.setEncoding('utf8');
	server.stderr.on('data',function(data){
		console.log(data);
	});
})
