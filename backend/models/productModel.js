import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ 
    
    name:{ type:String,required: true},
    description:{ type:String,required: true},
    price:{type:Number,required: true},
    image:{type:Array,required: true},
    category:{type:String,required: true},
    subCategory:{type:String,required: true},
    sizes:{type:Array,required: true},
    bestseller:{type:Boolean},    
    date:{type:Number,required: true},
<<<<<<< HEAD

=======
    isActive:{type:Boolean,required: true},
    isDeleted:{type:Boolean,required: true},
    isFeatured:{type:Boolean,required: true},
    isTrending:{type:Boolean,required: true},
    isNew:{type:Boolean,required: true},
    isBestSeller:{type:Boolean,required: true},
    isSale:{type:Boolean,required: true},
    isNew:{type:Boolean,required: true},
    
>>>>>>> 304f690 (fixloginsignup-admin)
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;