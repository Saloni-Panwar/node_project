const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected  : ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;



//GEMINI CODE ::::

// const mongoose = require("mongoose");

// const uri =
//   "mongodb+srv://Nikita_Panwar:Nikita_Panwar@nikitacluster.wagal.mongodb.net/myContact_Backend?retryWrites=true&w=majority&appName=NikitaCluster";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
