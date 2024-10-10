import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  try {
    const body = await request.json();
    const {id} = params;
    const { name, category, price } = body;
    await connectMongoDB();
    const data = await Product.findByIdAndUpdate(id, { name, category, price });
    return NextResponse.json({ message: "Product Updated Successfully", data });
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
