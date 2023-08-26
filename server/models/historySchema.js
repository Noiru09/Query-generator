import mongoose from "mongoose";
const Schema = mongoose.Schema;

const historySchema = new Schema({
    queryDesc: {
        type: String,
        required: true
    },
    dbName: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
});

const History = mongoose.model("History", historySchema);

export default History;
