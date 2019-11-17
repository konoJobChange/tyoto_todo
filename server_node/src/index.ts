import express from 'express';
import { api } from 'src/api';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`start server_node listen ${PORT} !!`);
});
