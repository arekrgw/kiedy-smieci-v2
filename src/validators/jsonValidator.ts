import {Request, Response, NextFunction} from 'express'
import * as errMsg from '../errorMessaging'
import {Error} from '../types/Error'

export const jsonValidate = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof SyntaxError && err.status && 'body' in err){
        console.error("JsonError");
        return res.status(400).json({error: errMsg.JSON_ERROR_SYNTAX})
    }
    next()
}