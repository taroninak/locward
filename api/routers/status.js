const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.send({
        services: {
            api: 'OPERATIONAL'
        }
    });
});

module.exports = router;
