// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import users from './static/users';

export default function handler(req, res) {
  const { method, body } = req;
  if (method !== 'POST') {
    return res.status(400).json({ message: 'Only POST is allowed' });
  }

  const { email, password } = body;
  if (!(email in users) || users[email].password !== password) {
    return res.status(403).json({ message: "Email or password didn't match" });
  }

  res.status(200).json({ message: 'Successfully logged in' });
}
