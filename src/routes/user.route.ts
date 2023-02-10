import { helloWorld } from "@api/helloworld.api";
import { NextFunction, Router, Response, Request } from "express";

const userRoute: Router = Router();


userRoute.get('/user', async(req: Request, res: Response, next: NextFunction) => {
    res.send('user api')
})

userRoute.get('/hello',async(req: Request, res: Response, next: NextFunction) => {
   const hello = helloWorld();
   res.send(hello);
})



export default userRoute;