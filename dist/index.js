"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
import "dotenv/config";
const mongoose_1 = __importDefault(require("mongoose"));
const MyUserRoute_1 = __importDefault(require("./routes/MyUserRoute"));
//Db connection
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log('database is connected'))
    .catch(() => console.log('error while connecting to the db'));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/health', (req, res) => {
    res.send({
        message: "server health is okay"
    });
});
//Routes
app.use('/api/my/user', MyUserRoute_1.default);
app.listen(7000, () => {
    console.log("Balaji is listening on port", 7000);
});
