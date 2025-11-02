import { NextResponse } from "next/server";

export async function GET() {
  const frame = {
    version: "1",
    image: "https://assisten-omega.vercel.app/ai.png",
    buttons: [
      { label: "Tanya AI" },
      { label: "About" }
    ],
    post_url: "https://assisten-omega.vercel.app/api/frame",
  };
  return NextResponse.json(frame);
}

export async function POST(req) {
  const body = await req.json();
  const prompt = body.text || "Hai, aku asistenmu!";
  return NextResponse.json({
    image: "https://assisten-omega.vercel.app/ai.png",
    text: `🧠 ${prompt}`,
  });
}
