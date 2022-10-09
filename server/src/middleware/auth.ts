import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//sudo nmp install dotenv, jsonwebtoken
//sudo --
//fuser -n tcp 3000
//kill -9 ______
export const validarToken = (req: Request, res: Response, next: NextFunction) =>
{
    dotenv.config();
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined')
    {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, process.env.TOKEN_SECRET || 'prueba', async (error:any, authData: any) =>
        {
            if (error)
                res.sendStatus(403);

            else
                next();
        });
    }
    else
    res.sendStatus(403);
}