"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const authRouter = express_1.default.Router();
authRouter.post('/login', authController_1.default.userLogin);
authRouter.post('/signup', authController_1.default.userSignup);
exports.default = authRouter;
