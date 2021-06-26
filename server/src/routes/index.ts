import express from "express";
const app = express();

import user from "./user";
import authorize from "./authorize";

app.use("/user", user);
app.use("/authorize", authorize);

export default app;
