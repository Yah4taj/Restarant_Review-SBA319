import mongoose from 'mongoose';



const reviewSchema = new mongoose.Schema(
    {
        user_id:{
            type: mongoose.ObjectId,
            ref: "User"
        },

      review: {
        type: String,
        required: true,
        unique: true,
      },
      restaurant_id:{
        type: mongoose.ObjectId,
        ref:"Restaurant",
      }
    
    },
    {
      timestamps: true,
    },
  );
  
  reviewSchema.index({user_id: 1});
  reviewSchema.index({review: 1});
  
  
  
  export default mongoose.model("Review", reviewSchema);
  