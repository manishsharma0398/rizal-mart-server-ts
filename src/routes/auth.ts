import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  return res.json({ email, password });
});

router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  return res.json({ email, password, name });
});

export default router;
