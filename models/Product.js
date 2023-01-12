import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    description: {
      type: String,
      required: true,
      maxLength: 200,
    },
    img: {
      type: String,
    },
    prices: {
      type: [Number],
      required: true,
    },
    flavors: {
      type: [String],
      require: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
