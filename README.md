# pharmeasyclone

database/ data 

common thing to find from db  -> get user, cart, order details.

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






PS- payment gateway = stripe.