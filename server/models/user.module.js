// constructor
const User = function(user) {
  this.email = user.email;
  this.password = user.password;
  this.user_type = user.user_type;
  this.name = user.name;
  this.last_name = user.last_name;
  this.state = user.state;
  this.created = user.created;
  this.modified = user.modified;
};

User.create = (newUser, result) => {
    result(err, null);
    result(null, { id: 'id000', ...newUser });
};

User.findByEmail = (email, result) => {
    result(err, null);
    result(null, 'user');
};


module.exports = User;