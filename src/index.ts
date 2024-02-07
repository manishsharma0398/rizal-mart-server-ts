import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

// swagger
import swaggerFile from '../swagger-output.json';

// utils
import { PORT, serverMessage } from './utils/constants';

// routes
import authRoutes from '@routes/auth';

// initialize express
const app = express();

// middlewares
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  return res.json({ msg: 'Home route' });
});

app.get('/health', (req, res) => {
  return res.json({ msg: serverMessage });
});

app.listen(PORT, () => {
  console.log(serverMessage);
});
