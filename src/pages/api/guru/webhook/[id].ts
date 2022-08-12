import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req: ', req);
  console.log('res', res);
  // method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

export default handler;
