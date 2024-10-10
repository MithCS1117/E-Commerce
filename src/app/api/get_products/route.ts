import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const data = await Product.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Something Went Wrong",
      },
      { status: 400 }
    );
  }
}
