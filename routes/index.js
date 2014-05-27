//first page
module.exports.index = function(req, res){
    res.render("index");
};

//request users.
//obs! dummy data here, no actual users exist 
module.exports.users = function(req, res){
    var id = req.body.id; 
    if (Math.random() < 0.5){
        res.jsonp({"id": id, "online": true});
    } else {
        res.jsonp({"id": id, "online": false});
    }
};
