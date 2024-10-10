import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  try {
    const {id} = params;
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product Deleted Successfully" });
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
