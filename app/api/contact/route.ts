import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Received body:', body) // Debugging

    const { name, email, membership, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Ensure membership is always a string (even if empty)
    const membershipValue = membership ? membership.toString() : ''

    // Save to database
    await prisma.contact.create({
      data: {
        name,
        email,
        membership: membershipValue,
        message,
      },
    })

    // Validate email credentials
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error('❌ Missing email environment variables')
      return NextResponse.json(
        { error: 'Email service misconfiguration' },
        { status: 500 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this if using another provider (e.g., SMTP)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Your email where you want to receive notifications
      subject: 'New Contact Form Submission',
      text: `📩 New Contact Form Submission:
      
      - Name: ${name}
      - Email: ${email}
      - Membership: ${membershipValue || 'None'}
      - Message: ${message}
      
      ✅ Submitted successfully!`,
    }

    console.log('📩 Sending email notification...')
    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')

    return NextResponse.json(
      { success: true, message: 'Message saved and email notification sent!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error in /api/contact:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
