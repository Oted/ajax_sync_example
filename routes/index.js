//first page
module.exports.index = function(req, res){
    res.render("index");
};

//request users.
//obs! dummy data here, no actual users exist, 
//as i understood it the focus is on the front-end.
module.exports.users = function(req, res){
    if (Math.random() < 0.5){
        res.jsonp({"id": req.params.id, "online": true});
    } else {
        res.jsonp({"id": req.params.id, "online": false});
    }
};
