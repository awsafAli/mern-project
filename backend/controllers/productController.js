
const Product = require("../models/ProductModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//create Product admin

/*exports.createProduct = async (req, res, next) => {
    
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        product
    })
    
}*/

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user= req.user.id
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        product,
    });
    
});

exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
     
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    let products = await apiFeature.query;
       
    res.status(200).json({
        success: true,
        products,
        productCount,
    });
});

// get product deatils


exports.getAllProductDetails = catchAsyncErrors(
    async(req, res, next)=>{
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander("product not found", 404));
        }
        await product.remove();
        res.status(200).json({
            success: true,
            product
        })
    }
)

//update product admin
exports.updateProducts = catchAsyncErrors(
    async(req, res,next) => {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHander("product not found", 404));
        }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        res.status(200).json({
            success: true,
            product
        })
    }
)

//delete product

exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {
    
        const product = await Product.findById(req.params.id);
    
        if (!product) {
            return next(new ErrorHander("product not found", 404));
        }
    
        
        await product.remove();
        res.status(200).json({
            success: true,
            message:"Product deleted successfully"
        })
    }
)