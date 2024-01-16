import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriberId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        red: "User"
    }
});

export const Subscription = new mongoose.Schema("Subscription", subscriptionSchema);