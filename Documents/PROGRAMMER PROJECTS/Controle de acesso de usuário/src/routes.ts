import { Router } from "express";
import { Response, Request } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "itΒ΄s well ππβ" });
});
export { routes };
