import { NextResponse } from "next/server";
import { leadSchema } from "@/components/forms/formSchema";
import { connectToDatabase } from "@/lib/mongo";
import Lead from "@/models/Lead";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation_error",
        details: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const created = await Lead.create(parsed.data);

  return NextResponse.json(
    { ok: true, id: created._id.toString() },
    { status: 201 }
  );
}
