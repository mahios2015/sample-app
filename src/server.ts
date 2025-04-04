import express from 'express';
import userRoutes from '../modules/user/user.routes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;