const { Cart } = require("../models/cart.model");

let cartItems = [];

async function addProduct(req,res){
    try {
        
        let productById = await Product.distinct("id");
        let cartItems = productById
        if (cartItems) {
            cartItems.Product.findOne({
                '_id': id,
            })
        }
        else {
            const updateInDB =async  () => {
                const Product = mongoose.model('products', productSchema);
                let data = await  Product.updateOne(
                    { quantity: "1"},
                    {
                        $set: { quantity: "" }
                    }
                )
                console.log(data)
            }
        }


        // addedProduct = addedProduct.filter(el=>{
        //     return (el==="Baby Care" || el==="Cleansers" || el==="Diabetic Care" || el==="Dressing" ||
        //     el==="Massage Tools" || el==="Homeopathy" || el==="Vitamins And Supplements" || el==="Maternity Care" || el==='Hair Styling Tools') ;
        // })
        //  res.send({totalCategories})



        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
async function updateProduct(req,res){
    try {

        if (cartItems) {
            cartItems.Product.findOne({
                '_id': id,
            })
        }
        else {

        }

        let addedProduct = await Product.distinct("sub_category")

        addedProduct = addedProduct.filter(el=>{
            return (el==="Baby Care" || el==="Cleansers" || el==="Diabetic Care" || el==="Dressing" ||
            el==="Massage Tools" || el==="Homeopathy" || el==="Vitamins And Supplements" || el==="Maternity Care" || el==='Hair Styling Tools') ;
        })
         res.send({totalCategories})



        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async function deletProduct(req, res) {

    try {
        let {category} = req.params;
        let {
            brand = '',
            search = '',
            pageSize = 20, 

            
            page = 1,
            sortBy = '_id',
            sortOrder = '' 
        } = req.query;
    
        const totalProducts = await Product.find({
            sub_category:category,
        }).count();
        if(totalProducts === 0) {
           return  res.status(404).send({message:"Page not found"}) 
        }
        
    
        const products = await Product.find({
            sub_category:category,
        })
        .sort({
            [sortBy]: sortOrder === 'asc' ? 1 : -1
        })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    
        return res.send({
                totalProducts,
                products,
                page,
                pageSize    
        })
    } catch(err) {
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}

async function getProductById(req, res) {

    const {id} = req.params;

    const product = await Product.find({
        '_id': id,
    })

    return res.send({
       product
    })
}

module.exports={
    deletProduct,
    updateProduct,
    getProductById,
    addProduct
}