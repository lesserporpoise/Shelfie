module.exports={
    read:(req,res) => {const dbInstance = req.app.get('db');
    dbInstance.read_inventory()
    .then(inventory=>res.status(200).send(inventory))
    .catch(err=>{
        res.status(500).send({errorMessage:"just follow the sound of my VOICE!!!"});
        console.log(err)
        })
    },

    create:(req,res) => {

    },

    update:(req,res) => {
    
    },

    delete:(req,res) => {

    },
}