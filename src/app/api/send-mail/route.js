import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, service, volume, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Ubxexpress.com <onboarding@resend.dev>",
      to: "ubxexpress@outlook.com",
      subject: `New Inquiry: ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Service Request</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155; margin: 0; padding: 0; background-color: #f8fafc;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
              
              <!-- Header -->
              <div style="background-color: #dc2626; padding: 32px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px; ">UBX EXPRESS LOGISTICS</h1>
                <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 14px;">New Service Inquiry</p>
              </div>

              <!-- Content -->
              <div style="padding: 32px 24px;">
                <div style="margin-bottom: 24px;">
                  <h2 style="color: #0f172a; margin: 0 0 16px 0; font-size: 18px; border-bottom: 2px solid #ffd700; padding-bottom: 8px; display: inline-block;">Contact Details</h2>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: bold; text-transform: uppercase; width: 140px;">Name</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${firstName} ${lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: bold; text-transform: uppercase;">Email</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
            
                  </table>
                </div>

                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
                  <h3 style="color: #dc2626; margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                  <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #f1f5f9; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #64748b; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} Ship Swift Express. All rights reserved.
                </p>
                <div style="margin-top: 12px;">
                  <a href="https://new-rimes-folio.vercel.app" style="color: #dc2626; text-decoration: none; font-size: 12px; font-weight: 600;">Visit Website</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ success: false, message: "Failed to send email" }),
        { status: 500 },
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending email" }),
      { status: 500 },
    );
  }
}
