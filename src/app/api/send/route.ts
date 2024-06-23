import { ContactTemplate } from '../../../components/emails/ContactTemplate';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string(),
  });
  const { name, email, phone, message } = bodySchema.parse(body);
  try {
    const { data, error } = await resend.emails.send({
      from: 'noreply@faculdadecatolicadomaranhao.com',
      to: ['ouvidoria@iesma.edu.br'],
      subject: 'Novo contato recebido!',
      react: ContactTemplate({ name, email, phone, message }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
