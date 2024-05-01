const { ObjectId } = require('mongodb');
const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
    first_name:{
            type:String,
            required:[true,'please enter your first name']

    },
    last_name:{
        type:String,
        required:[true,'please enter your last name']
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    // Custom validation for email format using a regular expression
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:false
    },
    patient_profile:{
        gender:{
            type:String, 
        },
        date:{
            type:Date,
        },
        address:{

        },
        medical_background:{
            type: [String],
            default:null
        },
        blood_type:{
            type:String,
            
        }
        
    },
    doctor_profile:{
        speciality:{
            type:String,
        },
        
        desk:{
            floor:{
                type:Number,
                
            },
            num:{
                type:Number,
            }
        },
        prix:{
            type:Number,
        },
        maxPatient:{
            type:Number,
        },
        ownPatients:[{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"User"
        }]
    }
},
{
    timestamps:true
}
)

const User=mongoose.model('User',userSchema);

module.exports=User;

