const { Router } = require('express');

const router = new Router();

router.get('/health', (req, res) => {
  return res.send({ message: 'Connected with success in port 3000!' });
});

module.exports = router;
