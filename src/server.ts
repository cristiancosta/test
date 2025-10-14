import express from 'express';
import errorHandler from './middlewares/error-handler';
import createRouter from './routes';

const app = express();

app.use(express.json());
app.use('/', createRouter());
app.use(errorHandler);

app.listen(8080, () => console.log(`Server running on port 8080`));
