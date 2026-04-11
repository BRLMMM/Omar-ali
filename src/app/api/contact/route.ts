import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, company, serviceType, details, email, phone, timeline, projectOrigin, inspiration, source } = await req.json();

    // Basic Validation
    if (!name || !email || !serviceType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('DEBUG [Email Auth]:', {
      userSet: !!process.env.EMAIL_USER,
      passSet: !!process.env.EMAIL_APP_PASSWORD,
      userLength: process.env.EMAIL_USER?.trim().length,
      passLength: process.env.EMAIL_APP_PASSWORD?.trim().length,
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_APP_PASSWORD?.trim(),
      },
      tls: {
        rejectUnauthorized: false // Helps avoid local certificate issues on some Windows setups
      }
    });

    const mailOptions = {
      from: `"Seyaq Portfolio" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Project Inquiry: ${name} from ${company || 'Unknown Company'}`,
      text: `
        New Contact Inquiry from Seyaq Portfolio:

        CLIENT PROFILE:
        Name: ${name}
        Company: ${company || 'N/A'}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Source: ${source || 'N/A'}

        PROJECT SCOPE:
        Service Type: ${serviceType}
        Origin: ${projectOrigin || 'N/A'}
        Timeline: ${timeline || 'N/A'}
        Inspiration Links: ${inspiration || 'N/A'}

        DETAILS:
        ${details || 'No details provided.'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 8px; border-top: 5px solid #CCFF00;">
            <h2 style="margin-top: 0; color: #111;">🎯 New Project Deal!</h2>
            
            <h3 style="color: #666; border-bottom: 1px solid #eee; padding-bottom: 5px;">Client Profile</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Found You Via:</strong> ${source || 'N/A'}</p>
            
            <h3 style="color: #666; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px;">Project Scope</h3>
            <p><strong>Service Requested:</strong> <span style="background: #CCFF00; padding: 2px 8px; border-radius: 4px; font-weight: bold; color: black;">${serviceType}</span></p>
            <p><strong>Project Origin:</strong> ${projectOrigin || 'N/A'}</p>
            <p><strong>Timeline:</strong> <strong style="color: #d32f2f;">${timeline || 'N/A'}</strong></p>
            <p><strong>Inspiration Links:</strong> <br/><span style="word-break: break-all;">${inspiration || 'N/A'}</span></p>

            <h3 style="color: #666; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px;">Full Details</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${details || 'No details provided.'}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
