const router = require('express').Router();
const User = require('../model/User')


router.post('/users', async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.send(`data is inserted`)
    } catch (error) {
        console.log(error);
    }

});

//read all...

router.get('/users', async (req, res) => {
    try {
        const data = await User.findAll();
        res.send(data)
    } catch (error) {
        console.log(error);
    }
});


//read one...

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await User.findAll({
            where: {
                id: id
            }
        });
        res.send(data);
    } catch (error) {
        console.log(error);
    }

})





module.exports = router;