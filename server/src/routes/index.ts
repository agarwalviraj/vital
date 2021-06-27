import express from "express";
const app = express();

import user from "./user";
import authorize from "./authorize";
import patient from "./patient";

app.use("/user", user);
app.use("/authorize", authorize);
app.use("/patient", patient);

export default app;
