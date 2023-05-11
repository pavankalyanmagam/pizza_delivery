import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    payment_id: {
      type: String,
      maxlength: 160,
    },
    order_id: {
      type: String,
      maxlength: 200,
    },
    payment_type: {
      type: String,
    },
    payment_status: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
