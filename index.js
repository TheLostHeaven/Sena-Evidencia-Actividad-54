import app from './src/app.js';
import "./src/database/database.js";
import { PORT } from './src/config.js';



app.listen(PORT);
console.log('Live serve on', + PORT)
