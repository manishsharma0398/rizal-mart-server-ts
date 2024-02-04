import express from 'express';
import swaggerUi from 'swagger-ui-express';

// swagger
import swaggerFile from '../swagger-output.json';

// routes
import authRoutes from '@routes/auth';

// initialize express
const app = express();

// middlewares
app.use(express.json());

app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// routes
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  return res.json({ msg: 'Server running successfully' });
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});
