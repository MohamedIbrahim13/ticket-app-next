import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { formData } = await req.json();
    if (!formData?.email || !formData.password) {
      return NextResponse.json(
        { message: "All fields are a required", error },
        { status: 400 }
      );
    }
    const exists = await User.findOne({ email: formData.email }).lean().exec();
    if (exists) {
      return NextResponse.json(
        { message: "User already exists", error },
        { status: 409 }
      );
    }
    const hashPassword = await bcrypt.hash(formData.password, 10);
    formData.password = hashPassword;
    await User.create(formData);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
