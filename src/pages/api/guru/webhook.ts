import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req', JSON.stringify(req, null, 2));
  console.log('res', JSON.stringify(res, null, 2));
  // method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}

export default handler;
