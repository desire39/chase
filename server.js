import express from 'express';
import bodyParser from 'body-parser';

// eslint-disable-next-line import/no-unresolved
import usersRoutes from './routes/users.js ';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/user', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port: http://localhost: ${PORT}`));
