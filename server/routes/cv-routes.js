const router=require('express').Router();

router.get('/', (req, res) => {
    res.send("Hellow");
});

module.exports=router;