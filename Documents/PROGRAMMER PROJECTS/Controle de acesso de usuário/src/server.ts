import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import "./database/index";

const Server = express();

Server.use(express.json());
Server.use(routes);

Server.listen(4444, () => {
      console.log("server started on port 4444");
});
