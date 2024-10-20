import express from "express";
import userRoutes from "./src/user/user.routes.js";
//import "dotenv/config";

const APP = express();
const PORT = 3000;
//const PORT = parseInt(precess.env.AGENDA_VIAJE_PORT) || 3000;

APP.use(express.json());

APP.get("/", (req, res) => {
  res.status(200).json("ok");
});

APP.use("/api", userRoutes);

APP.listen(PORT, () => {
  console.log(`Server funcionando en puerto: http://localhost:${PORT}`);
});
