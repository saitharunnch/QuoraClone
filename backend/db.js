const mongoose = require("mongoose");


const url = "mongodb+srv://saidb:saidb@saidb.wwrwv.mongodb.net/test"
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
