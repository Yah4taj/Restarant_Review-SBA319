import mongoose from 'mongoose';



const restaurantSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      address: {
        type: String,
        required: true,
        unique: true,
      },
      restaurantId: {
        type: Number,
        required: true,
        unique: true,
      },
      reviews:[{
        type:mongoose.ObjectId, ref:"Review"
      }]
        
      
    },
    {
      timestamps: true,
    },
  );
  
  restaurantSchema.index({name: 1});
  restaurantSchema.index({restaurant_id: 1});
  
  
  
  export default mongoose.model("Restaurant", restaurantSchema);
  