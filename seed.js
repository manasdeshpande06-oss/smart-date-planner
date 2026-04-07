const { MongoClient } = require("mongodb");
const fs = require("fs");

// Extract the MongoDB URI. Node 22 supports this via --env-file=.env
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is not defined in your environment.");
  process.exit(1);
}

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Successfully connected to MongoDB.");

    const db = client.db("DatePlanner"); // Using the same database name as in our app route
    const collection = db.collection("activities");

    // Clear existing data (optional, ensures no duplicates if run multiple times)
    await collection.deleteMany({});
    console.log("Cleared existing data from activities collection.");

    // Read the dataset
    const fileData = fs.readFileSync("dataset.json", "utf-8");
    const plans = JSON.parse(fileData);

    // Insert all documents
    const result = await collection.insertMany(plans);
    console.log(`🎉 Successfully inserted ${result.insertedCount} date plans into the database!`);
    
  } catch (error) {
    console.error("❌ Error seeding the database:");
    console.error(error);
  } finally {
    await client.close();
  }
}

seed();
