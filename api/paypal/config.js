module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const clientId = process.env.PAYPAL_CLIENT_ID;

  if (!clientId) {
    return res.status(500).json({ error: 'PAYPAL_CLIENT_ID n’est pas configuré sur Vercel.' });
  }

  return res.status(200).json({ clientId });
};
