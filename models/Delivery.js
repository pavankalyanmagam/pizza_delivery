import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema(
  {
    delivery_id: {
      type: String,
      maxlength: 60,
    },
    order_id: {
      type: String,
      maxlength: 200,
    },
    order_status: {
      type: String,
      maxlength: 200,
    },
    delivery_address: {
      type: String,
      maxlength: 200,
    },
    payment_type: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Delivery ||
  mongoose.model("Delivery", DeliverySchema);
