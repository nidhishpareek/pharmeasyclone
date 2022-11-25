const { Product } = require("../models/product.models");

async function getCategories(req, res) {
  try {
    let totalCategories = await Product.distinct("category");


    totalCategories = totalCategories.filter(el=>{
        return (el==="Ayush" || el==="Covid Essentials" || el==="Devices" || el==="Fitness" ||
        el==="Mom & Baby" || el==="Personal Care" || el==="Skin Care" || el==="Surgical" || el==='Treatments' || el === 'Tools & Appliances') ;
    })
    res.send({ totalCategories });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getAllProductsByCategory(req, res) {
  try {
    let { category } = req.params;
    let {
      search = "",
      brand = "",
      pageSize = 20,
      page = 1,
      sortBy = "_id",
      sortOrder = "",
    } = req.query;
    const filters = {
      category: category,
    };
    if(brand.length > 0){
      filters.manufacturer = brand;
    }

    const totalProducts = await Product.find(filters).count();

    if (totalProducts === 0) {
      return res.status(404).send({ message: "Page not found" });
    }
    let subCategories = await Product.find({ category: category }).distinct(
      "sub_category"
    );
    let totalBrands = await Product.find({ category: category }).distinct(
      "manufacturer"
    );

    const products = await Product.find(filters)
      .sort({
        [sortBy]: sortOrder === "asc" ? 1 : -1,
      })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return res.send({
      totalProducts,
      products,
      page,
      pageSize,
      subCategories,
      totalBrands,
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Something went wrong",
    });
  }
}
async function getAllProductsBySubCategory(req, res) {
    try {
      let { sub_category,category } = req.params;
      let {
       brand = "",
        pageSize = 20,
        page = 1,
        sortBy = "_id",
        sortOrder = "",
      } = req.query;
      const filters = {
        sub_category,
      };

      if(brand.length > 0){
        filters.manufacturer = brand;
      }
  
      const totalProducts = await Product.find(filters).count();
  
      if (totalProducts === 0) {
        return res.status(404).send({ message: "Page not found" });
      }
      let subCategories = await Product.find({ category: category }).distinct(
        "sub_category"
      );
      let totalBrands = await Product.find({ sub_category: sub_category }).distinct(
        "manufacturer"
      );
  
      const products = await Product.find(filters)
        .sort({
          [sortBy]: sortOrder === "asc" ? 1 : -1,
        })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
  
      return res.send({
        totalProducts,
        products,
        page,
        pageSize,
        subCategories,
        totalBrands,
      });
    } catch (err) {
      return res.status(500).send({
        status: "error",
        message: "Something went wrong",
      });
    }
  }

async function getProductById(req, res) {
  const { id } = req.params;

  const product = await Product.find({
    _id: id,
  });

  return res.send({
    product,
  });
}

module.exports = {
  getAllProductsByCategory,
  getProductById,
  getCategories,
  getAllProductsBySubCategory
};
