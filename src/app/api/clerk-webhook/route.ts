import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("✅", body);

    if (!body || typeof body !== "object") {
      throw new Error(
        "Invalid request payload: Body is empty or not an object"
      );
    }

    const { id, email_addresses, first_name, image_url } = body?.data;

    const email = email_addresses[0]?.email_address;

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || "",
        profileImage: image_url || "",
      },
    });
    return new NextResponse("User updated in database successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.log("Error updating database:", error);
    return new NextResponse("Error updating user in database", { status: 500 });
  }
}
