import mongoose from "mongoose";

const CustomizationSchema = new mongoose.Schema(
  {
    customization_id: {
      type: String,
      maxlength: 60,
    },
    customization_type: {
      type: String,
      maxlength: 200,
    },
    customization_price: {
      type: Number,
      
    }
  },
  { timestamps: true }
);

export default mongoose.models.Customization ||
  mongoose.model("Customization", CustomizationSchema);
