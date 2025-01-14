"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TravelService_1 = __importDefault(require("../services/TravelService"));
class TravelController {
    async getAllTravels(req, res) {
        const { data, error, message, statusCode } = await TravelService_1.default.getAll();
        if (error) {
            res.status(statusCode).json({ error: message });
            return;
        }
        res.status(statusCode).json({ message, data });
    }
    async getTravelById(req, res) {
        const { data, error, message, statusCode } = await TravelService_1.default.getById(Number(req.params.id));
        if (error) {
            res.status(statusCode).json({ error: message });
            return;
        }
        res.status(statusCode).json({ message, data });
    }
    async deleteTravel(req, res) {
        const { data, error, message, statusCode } = await TravelService_1.default.delete(Number(req.params.id));
        if (error) {
            res.status(statusCode).json({ error: message });
            return;
        }
        res.status(statusCode).json({ message, data });
    }
}
exports.default = new TravelController();
