const mongoose = require('mongoose');

const Product  = mongoose.model('Product');

module.exports = {
  async index(req, resp) {
    const { page = 1 } = req.query; // com default quando a rota nao encontra o parametro
    const products = await Product.paginate({}, { page , limit: 5 }); //troca pelo paginate

    return resp.json(products);
  },

  async store(req, resp) {
    const product = await Product.create(req.body);

    return resp.json(product);
  },

  async show(req, resp) {
    const product = await Product.findById(req.params.id);

    return resp.json(product);
  },

  async update(req, resp) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return resp.json(product);
  },

  async destroy(req, resp) {
    await Product.findByIdAndRemove(req.params.id);

    return resp.send();
  }

};