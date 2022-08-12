import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'POST' && !!id) {
    const { name, email } = req.body;
    console.log('name', name);
    console.log('email', email);
    if (!!name && !!email) {
      fetch(`https://links.criptomaniacos.com.br/form/${id}`, {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      });
      return res.status(200).json({
        status: 'ok',
      });
    }
  }
  console.log('body', req.body);

  // method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

export default handler;
