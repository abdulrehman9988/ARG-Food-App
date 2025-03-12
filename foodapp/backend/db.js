
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://arehmanrg:Abdul9988@cluster0.apcpv.mongodb.net/ARGFoods?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully!");

    // Fetching data properly
    const db = mongoose.connection.db;
    const fetch_data = db.collection("food_items");

    const data = await fetch_data.find({}).toArray(); //  Await the query
    
    const foodCategory= db.collection("foodCategory")

    const catData=await foodCategory.find({}).toArray();
    
    global.food_items=data;
    global.foodCategory=catData;
    

  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;
