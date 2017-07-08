var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newDB');

var Users = mongoose.model('Users', { id: Number, name: String });

var user1 = new Users({ id:'123' , name: 'Prinstine' });

user1.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

mongoose.connection.close();