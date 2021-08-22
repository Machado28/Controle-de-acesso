import { Router } from "express";
import { Response, Request } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "it´s well 🎉🎉✔" });
});
export { routes };
