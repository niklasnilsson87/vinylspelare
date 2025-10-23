import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../components/Email/Template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const payload = await request.json();

  if (!payload.name || !payload.email || !payload.message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['niklas.nilsson1987@gmail.com'],
      subject: 'Info från vinylspelare.se',
      react: EmailTemplate(payload),
    });
    console.log('Email send result:', data);
    console.log('Email send error:', error);
    
    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: `Email sending failed: ${error.message || 'Unknown error'}` }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({ error: 'Unexpected error occurred' }, { status: 500 });
  }
}