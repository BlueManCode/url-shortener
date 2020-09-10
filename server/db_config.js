const mongoose = require('mongoose');

try {
  mongoose.connect(
    'mongodb+srv://aman:aman@streamingcluster-jz1hw.mongodb.net/url_shortener?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
  console.log('database connected');
} catch (error) {
  console.log("coudln't connect to the database");
}
module.exports = mongoose;
