import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API Key (GROQ_API_KEY) is not configured in .env.local" },
        { status: 500 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a professional and helpful customer support assistant for Nexus AI Systems. Provide concise, friendly, and accurate responses.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    const text = chatCompletion.choices[0]?.message?.content || "No response generated.";

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Groq API Error:", error.message || error);
    return NextResponse.json(
      { error: "I'm sorry, I'm having trouble connecting to the network. Please try again later." },
      { status: 500 }
    );
  }
}
