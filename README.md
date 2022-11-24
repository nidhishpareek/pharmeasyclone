# pharmeasyclone

database/ data 

common thing to find from db  -> get user, cart, order details.


routers = user, product, order, cart,

products ->
    get products, 
        sorting , filter, specific route, 


login ->
    post request only,
        get 




cart: {    (//get: items array        patch//change qty.  //post: add item if not in items, else update qty+1.   
            //delete through product id)
    userid:
    items:[
        {productid, qty, timestamp}
    ]
    
}

order:{       //get: items array  
    userid:
    items:[
        {productid, qty, offers/coupons }
    ]
    timestamp:
}

user:{              
    name:
    email
    passwoed
    gender
    username
    image
    order
    payments
}


user=> 
    loggedIn : get request to check if user is logged in
    post=>
        Login:
            req = post - {email, pass}
            res= match? jwt : reject
        
        Signup:
            req = post - {email, pass, name}
            controller=> 
                    check if user exists ? fail if already exist mobile number: continue
                    create new user
            res - jwt token send                                                        // line 51 code reference




cart =>  
    get request=>
        at time of login / cart open
        find cart by user id ? if exists then return response : else create a new cart and return empty;

    post =>     product page.
    (product id, user id (JWT token) , quantity)

        middleware check user jwt / authentication


        find cart by user id,
        check if product-ids exists the result by finding above, ? return response 400 : add product to cart as insertMany;
        response as object we got from adding in db.

    patch => every time quantity changes in frontenend cart page.  (product id, user id , quantity)
        middleware check user jwt / authentication
        find cart by user id,
        check if product-id exists, ? set quantity : return 404;

    delete=> delete button  (product id, user id , quantity)
        middleware check user jwt / authentication
        find cart by user id,
        check if product-id exists, ? delete : return 404;


order:{       //get: items array  
    userid:
    orderList:[
            {productid, qty, offers/coupons }
    ]
    timestamp:
}

order =>  
    get request=>
        find order object by user id ? if exists then return response : else create a new cart and return empty;

    post =>   my orders page.
    (product id, user id )

        middleware check user jwt / authentication

        find orders by user id,
        add product to orderList one order;
        response as array we got from adding in db.





PS- payment gateway = stripe.
TODOs=>
post in cart when user just login (contains key loginpage true),



categories => 
    Baby Care 
    Cleansers
    Diabetic Care 
    Dressing
    Maternity Care
    Homeopathy
    Massage Tools
    Vitamins And Supplements
    Hair 
