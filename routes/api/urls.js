const router = require('express').Router();
const { Router } = require('express');
const { body } = require('express-validator');
const { Url } = require('../../db');
const {check,validationResult} = require('express-validator');


router.get('/', async (req, res) => {
    const urls = await Url.findAll();
    res.json(urls);
});

router.get('/:urlId', async (req, res) => {
    const Id= await Url.findOne({where: {id: req.params.urlId}});
    if (Id) {  

        const urls = await Url.findAll({
        where : { id: req.params.urlId}   
        });  

        res.json(urls);

    }else{

        res.json({ error: 'Id no existe en la bd'});
    } 
});



router.post('/',  [
    check('url_name','The name of the Url cannot be null').not().isEmpty(),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }  

       const urlValidator = await Url.findOne({where: {url_name: req.body.url_name}});
        if (!urlValidator) {
            const url = await Url.create(req.body);
            res.json(url);
        }
        else
        {
            res.json({ error: 'Url ya existe en la bd'});
        }      
        
});



router.put('/:urlId', async (req, res) => {

    const Id= await Url.findOne({where: {id: req.params.urlId}});
    if (Id) {     
            const url = await Url.update(req.body, {
            where : { id: req.params.urlId}   
            });
            res.json( {success: 'Updated Url'} );
    }
    else
    {
        res.json({ error: 'Id no existe en la bd'});
    } 

});



router.delete('/:urlId',async (req, res) => {   
    const IdValidator = req.params.urlId;    
    
    if(IdValidator)
    {
        const Id= await Url.findOne({where: {id: req.params.urlId}});
        if (Id) {     
            await Url.destroy({
                where : { id: req.params.urlId}   
               });  
        
            res.json( {success: 'Deleted Url'} );
        }
        else
        {
            res.json({ error: 'Id no existe en la bd'});
        } 
    
    }
    
    });
    


 

module.exports = router;