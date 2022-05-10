const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter the product name"],
        trim:true
    },
    description: {
        type: String,
        required: [true, "Please enter the description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        maxLength:[6,"price cannot exceed 6 character"]
    },
    rating: {
        type: Number,
       default:0
    },
    images: [
        {
            public_id: {
                type: String,
                required:true
                
            },
            url: {
                type: String,
                required:true
                
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter the category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the product stock"],
        maxLength: [4, "stock cannot exceed 4 character"],
        default:1
    },
    numOfReviews: {
        type: Number,
        default:0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
               default:0
            },
            comment: {
                type: String,
                required: true
                
            }

        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    createdAt: {
        type: Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product",productSchema);