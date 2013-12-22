
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index.ejs',{
  title: 'Falconzy \'s Playgournd',
	 	layout:'layout'})
};
