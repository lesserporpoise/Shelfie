module.exports={
    read:(req,res) => {const dbInstance = req.app.get('db');
    dbInstance.read_inventory()
    .then(inventory=>res.status(200).send(inventory))
    .catch(err=>{
        res.status(500).send({errorMessage:"just follow the sound of my VOICE!!!"});
        console.log(err)
        })
    },

    create:(req,res) => {const dbInstance = req.app.get('db');
    dbInstance.create_product([req.body.name,req.body.price,req.body.imgurl])
    .then(()=>res.sendStatus(200))
    .catch(err=>{
        res.status(500).send({errorMessage:"just follow the sound of my VOICE!!!"});
        console.log(err)
    })
    },

    update:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.update_product(req.params.id,req.body.name,req.body.price,req.body.imgurl)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage: "just follow the sound of my VOICE!!!"});
            console.log(err)
        })
},

    delete:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.delete_product(req.params.id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"just follow the sound of my VOICE!!!"});
            console.log(err)
})
},
}