var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('index');
});

app.listen(3000);