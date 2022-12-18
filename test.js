import express from 'express';
import bodyParser from 'body-parser';

// eslint-disable-next-line import/extensions
import usersRoutes from './routes/user.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/user', usersRoutes);
app.get('/', (req, res) => res.send('Welcome to the Users API!'));
app.all('*', (req, res) => res.send("You've tried reaching a route that doesn't exist."));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
