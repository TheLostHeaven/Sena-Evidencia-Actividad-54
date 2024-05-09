import express from 'express'
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    // Permite conexiones de cualquier url
    //
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE"

    // Permite conexiones de la url especifica
      origin: "http://localhost:4200",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
  })
);

import publicationRoute from "./routers/publication.js"


app.use("/api/publication", publicationRoute)


export default app;
