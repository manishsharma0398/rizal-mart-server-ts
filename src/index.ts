import express from 'express';

import authRoutes from '@routes/auth';

// initialize express
const app = express();

// middlewares
app.use(express.json());

// routes
app.use('/auth', authRoutes);

app.get('/health', (req, res) => {
  return res.json({ msg: 'Server running successfully' });
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});
