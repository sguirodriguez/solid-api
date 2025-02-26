import { Router, Request, Response } from "express";

const router = Router();

router.post('/users', (request: Request, response: Response) => {
    const { user } = request.body;
    console.log(user);
    response.status(201).send();

    return
});


export { router }