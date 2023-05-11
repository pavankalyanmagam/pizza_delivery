import mongoose from "mongoose";

var val = Math.floor(1000 + Math.random() * 9000);

const CustomizationSchema = new mongoose.Schema(
  {
    customer_id: {
      type: String,
      maxlength: 200,
    },
    customer_name: {
      type: String,
      maxlength: 200,
    },
    customer_email: {
      type: String,
      maxlength: 100,
    },
    customer_address: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

// Export the model
export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomizationSchema);
