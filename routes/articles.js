exports.read = function(req, res) {
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM products',[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
}

exports.create = function(req, res) {
 	var data = req.body;

	req.getConnection(function(err,connection){
		connection.query('INSERT INTO products SET ?',[data],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
 }


exports.profile = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM lembretes WHERE id = ?',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
}

exports.update = function(req, res) {
 	var data = req.body,
 		id 	   = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('UPDATE lembretes SET ? WHERE id = ? ',[data, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}

exports.delete = function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('DELETE FROM products WHERE id = ? ',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
}
