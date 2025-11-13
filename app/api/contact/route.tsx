import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Send email to company
    const response = await resend.emails.send({
      from: "Shree Gopala <onboarding@resend.dev>",
      to: "info@shreegopala.com",
      subject: `New Inquiry from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Inquiry</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">Message:</h3>
            <p style="white-space: pre-wrap; color: #333;">${validatedData.message}</p>
          </div>

          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px; font-size: 12px; color: #666;">
            <p>This is an automated message from your website contact form.</p>
            <p>Shree Gopala Enterprises | www.shreegopala.com</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "Shree Gopala <onboarding@resend.dev>",
      to: validatedData.email,
      subject: "We received your inquiry - Shree Gopala Enterprises",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Thank you for contacting us!</h2>
          
          <p>Dear ${validatedData.name},</p>
          
          <p>We have received your inquiry and appreciate your interest in Shree Gopala Enterprises. Our team will review your message and get back to you as soon as possible.</p>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">Your Message:</h3>
            <p style="white-space: pre-wrap; color: #333;">${validatedData.message}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #000;">Contact Information:</h3>
            <p>
              <strong>Phone:</strong> +91-121-4328707 / +91-9897671442 / +91-8218613982<br>
              <strong>Email:</strong> info@shreegopala.com<br>
              <strong>Website:</strong> www.shreegopala.com<br>
              <strong>Address:</strong> G-32, New Dev Shree Plaza, T. P. Nagar, Baghpat Road, Meerut City - 250002 (U.P.) India
            </p>
          </div>

          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px; font-size: 12px; color: #666;">
            <p>Best regards,<br>Shree Gopala Enterprises Team</p>
            <p>ISO 9001-2015 | CE Certified | WHO-GMP Certified</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors[0].message }, { status: 400 })
    }

    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
