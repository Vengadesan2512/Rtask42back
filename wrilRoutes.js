const express = require('express');
const { shortenUrl, getUrls, redirectUrl, deleteUrl } = require('./urlController');
const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/urls', getUrls);
router.get('/:shortId', redirectUrl);
router.delete('/urls/:id', deleteUrl);

module.exports = router;
