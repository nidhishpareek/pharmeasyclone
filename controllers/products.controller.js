const { Product} = require("../models/product.models");



async function getCategories(req,res){
    try {

        let totalCategories = await Product.distinct("category")

        // totalCategories = totalCategories.filter(el=>{
        //     return (el==="Baby Care" || el==="Cleansers" || el==="Diabetic Care" || el==="Dressing" ||
        //     el==="Massage Tools" || el==="Homeopathy" || el==="Vitamins And Supplements" || el==="Maternity Care" || el==='Hair Styling Tools') ;
        // })
         res.send({totalCategories})
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async function getAllProductsByCategory(req, res) {

    try {
        let {category} = req.params;
        let {
            sub_category = '',
            search = '',
            pageSize = 20, 
            page = 1,
            sortBy = '_id',
            sortOrder = '' 
        } = req.query;
        const filters = {
            category:category,
        }
        if(sub_category.length >= 1){
            filters.sub_category = sub_category
        }
    
        const totalProducts = await Product.find(filters).count();
        
        if(totalProducts === 0) {
           return  res.status(404).send({message:"Page not found"}) 
        }
        let totalCategories = await Product.find({category:category,}).distinct("sub_category")
        let totalBrands = await Product.find({category:category,}).distinct("manufacturer")
        
        const products = await Product.find(filters)
        .sort({
            [sortBy]: sortOrder === 'asc' ? 1 : -1
        })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    
        return res.send({
                totalProducts,
                products,
                page,
                pageSize,
                totalCategories ,
                totalBrands   
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
    getAllProductsByCategory,
    getProductById,getCategories
}