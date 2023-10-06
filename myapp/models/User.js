import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    whishlist: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Product",
        default: []
    }
}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)