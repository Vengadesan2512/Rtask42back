const Url = require('./urlModel');
const shortid = require('shortid');

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  const newUrl = new Url({
    originalUrl,
    shortUrl: `http://localhost:5000/api/${shortUrl}`,
  });

  await newUrl.save();
  res.json(newUrl);
};

const getUrls = async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
};

const redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortUrl: `http://localhost:5000/api/${shortId}` });

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).json('URL not found');
  }
};

const deleteUrl = async (req, res) => {
  const { id } = req.params;
  await Url.findByIdAndDelete(id);
  res.json({ message: 'URL deleted' });
};

module.exports = { shortenUrl, getUrls, redirectUrl, deleteUrl };

