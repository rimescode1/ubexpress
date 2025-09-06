import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, service, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Logistics Form <elijahisaiah44@gmail.com>",
      to: "elijahisaiah44@gmail.com",
      subject: `New Service Request: ${service}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ success: false, message: "Failed to send email" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email" }),
      { status: 500 }
    );
  }
}
