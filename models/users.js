var mongoose = require('mongoose');

var Scheme = mongoose.Schema;

var UserSchema = new Scheme({
    username: {type:String, require:true},
    password:{type:String, require:true},
});

module.exports = mongoose.model('User',UserSchema);