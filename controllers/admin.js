const mongoose = require('mongoose')
const products = require('../models/products')


module.exports.postAddProduct = async(req,res,next)=>{
    /*const{price,seller,imageUrl,description,category} = req.body*/
    try{
        await products.create({
            name:"hey",
            price:30000,
            seller:"TANUSHK",
            imageUrl:'https://www.bing.com/images/search?view=detailV2&ccid=i93kgvtC&id=1D2B60BAB0AE94FB2A7F08C6A65D74DF688927E5&thid=OIP.i93kgvtClw5v9M1XLz9NQgHaHa&mediaurl=https%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fasus_1015e_ds01_10_1_notebook_computer_943487.jpg&exph=2500&expw=2500&q=laptop+images&simid=608000849663389686&FORM=IRPRST&ck=D5D8941C220C3B87B69E5809326C07E9&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0',
            description:'Sexy Laptop',
            category:'Personal Machines'



        })
        res.redirect('/admin/products/all')
    }
    catch(err){
        next(err)
    }


}

module.exports.getProductsAll = async(req,res,next)=>{
    try{
        let allProducts = await products.find()
        res.render('admin/products-list',{products:allProducts})
    }
    catch(err){
        next(err)
    }
}