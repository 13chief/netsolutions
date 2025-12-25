import { NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(4000),
})

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { name, email, message } = contactSchema.parse(await request.json())

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const toAddress = CONTACT_TO ?? SMTP_USER
    const fromAddress = CONTACT_FROM ?? `NetSolutions <${SMTP_USER}>`

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New demo booking request from ${name}`,
      text: [
        "New demo booking request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 },
      )
    }

    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "We could not send your message. Please try again later." },
      { status: 500 },
    )
  }
}
