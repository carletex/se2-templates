import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "To Be Implemented!" }, { status: 200 });
}