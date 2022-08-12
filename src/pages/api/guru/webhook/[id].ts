import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('method', req.method);
  console.log('body', req.body);
  console.log('query', req.query);
  console.log('headers', req.headers);
  console.log('cookies', req.cookies);
  console.log('url', req.url);

  // method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

export default handler;
