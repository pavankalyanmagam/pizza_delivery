import mongoose from "mongoose";

const OrderDetailsSchema = new mongoose.Schema(
  {
    order_details_id: {
      type: String,
      maxlength: 60,
    },
    order_id: {
      type: String,
      maxlength: 200,
    },
    customization_id: {
      type: String,
      maxlength: 200,
    },
    pizza_id: {
      type: String,
      maxlength: 200,
    },
    quantity: {
      type: Number,
    },
    customization_price: {
        type: Number,
      },
  },
  { timestamps: true }
);

export default mongoose.models.OrderDetails ||
  mongoose.model("OrderDetails", OrderDetailsSchema);
