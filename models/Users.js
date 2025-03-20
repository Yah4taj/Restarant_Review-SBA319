import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
 user_id:{
  type: String,
   unique: true,
  } ,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
//       validate: {
//         validator: function(v) {
//           return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(v);  //
// },
//         message:props => `${props.value} is not a valid password!`
      
//     }
  }},
      {
        timestamps: true,
      },
);





export default mongoose.model("User", userSchema);






