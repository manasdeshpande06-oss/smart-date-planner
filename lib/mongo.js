import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let clientPromise;

if (!uri) {
  clientPromise = Promise.reject(new Error("MONGODB_URI not set in .env"));
} else if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR.
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    global._mongoClientPromise = client.connect().catch((err) => {
      global._mongoClientPromise = null; // allow retry on next request
      return Promise.reject(err);
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  clientPromise = client.connect();
}

export default clientPromise;