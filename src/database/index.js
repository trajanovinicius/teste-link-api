const mongoose = require("mongoose");
module.exports = {
  connect() {
    try {
      mongoose
        .connect(
          "mongodb+srv://todo:vini02s@cluster0.hoske.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then(console.log("Database connected"));
    } catch (error) {
      console.log(error);
    }
  },
};
