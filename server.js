/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/login.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/auth/v1/signup', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost: ${PORT}`));
