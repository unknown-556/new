import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,

  },
  LastName: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true
  },
  verifypassword: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    enum: ['Male', 'MALE', 'Female', 'FEMALE', 'male', 'female', 'Frog'],

  }
},
{
  timeStamps: true
}
);


const User = mongoose.model('User',userSchema)
export default User