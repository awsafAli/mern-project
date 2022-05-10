const mongoose = require("mongoose");



const connectDatabase = () => {
    mongoose.connect("mongodb+srv://mawsafali:mawsafali@cluster0.ddodu.mongodb.net/Ecommerce", {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true
    }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
}

module.exports = connectDatabase;