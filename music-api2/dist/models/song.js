"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://127.0.0.1:27017/local';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to database!");
    }
});
exports.SongSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
});
var Song = mongoose_1.default.model('Song', exports.SongSchema);
exports.default = Song;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9zb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUEyQztBQUkzQyxJQUFNLEdBQUcsR0FBVyxpQ0FBaUMsQ0FBQztBQUd0RCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFPO0lBQzFCLElBQUcsR0FBRyxFQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDM0I7U0FBSTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtLQUN4QztBQUNMLENBQUMsQ0FBQyxDQUFBO0FBR1csUUFBQSxVQUFVLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDbkMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ3BDLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBQztJQUM5QixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUM7Q0FDcEMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUNoRCxrQkFBZSxJQUFJLENBQUMifQ==