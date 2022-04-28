import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // cleanup query erros from elementor

    const query = Object.keys(req.query).reduce((acc, key) => {
      const k = key.replace('amp;', '');
      return { ...acc, [k]: req.query[key] };
    }, {});

    // send a POST request to cademi
    fetch(
      `https://criptomaniacos.cademi.com.br/api/postback/custom?token=${process.env.CADEMI_TOKEN}`,
      { method: 'POST', body: JSON.stringify(query) }
    );

    return res.status(200).json({
      status: 'ok',
    });
  }
  // method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

export default handler;

//https://criptomaniacos.cademi.com.br/api/postback/custom?token=25a9226459e51242a81c6e9e348a[…]liente_email=eduardo@criptomaniacos.io&status=aprovado
