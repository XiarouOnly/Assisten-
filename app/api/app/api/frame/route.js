// app/api/frame/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const metadata = {
    "og:title": "Asisten AI Frame",
    "og:description": "Tanya AI langsung di Farcaster",
    "fc:frame": "vNext",
    "fc:frame:image": "https://placehold.co/600x400?text=Asisten+AI",
    "fc:frame:button:1": "Mulai Chat",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": "https://assisten-omega.vercel.app/api/frame"
  };
  return NextResponse.json(metadata);
}

export async function POST(req) {
  try {
    const body = await req.formData();
    const text = body.get("text") || "tidak ada input";

    return NextResponse.json({
      "fc:frame:image": `https://placehold.co/600x400?text=Jawaban:+${encodeURIComponent(text)}`,
      "fc:frame:button:1": "Tanya lagi",
      "fc:frame:button:1:action": "post",
      "fc:frame:post_url": "https://assisten-omega.vercel.app/api/frame"
    });
  } catch (err) {
    console.error("Error di POST:", err);
    return NextResponse.json({ error: "Gagal proses input" }, { status: 500 });
  }
}
