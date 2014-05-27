//first page
module.exports.index = function(req, res){
    res.render("index");
};

//request users.
//obs! dummy data here, no actual users exist 
module.exports.users = function(req, res){
    if (Math.random() < 0.5){
        res.jsonp({"online": true});
    } else {
        res.jsonp({"online": false});
    }
};
