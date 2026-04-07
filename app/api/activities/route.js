import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("DatePlanner"); // Fixed case sensitivity

  const data = await db.collection("activities").find({}).toArray();

  return NextResponse.json(data);
}
