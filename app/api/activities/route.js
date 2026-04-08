import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("DatePlanner");
    const data = await db.collection("activities").find({}).toArray();
    return NextResponse.json(data);
  } catch (err) {
    console.warn("MongoDB unavailable, falling back to local dataset.json:", err.message);
    const filePath = path.join(process.cwd(), "dataset.json");
    const raw = readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  }
}
