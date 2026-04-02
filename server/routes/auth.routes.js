import express from 'express';
import { googleAuth,logout } from '../controllers/auth.controller.js';

const AuthRouter = express.Router();

AuthRouter.post("/google-authentication",googleAuth);
AuthRouter.get("/logout",logout);

export default AuthRouter;