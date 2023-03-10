import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

async function handler(req, res) {
  const {
    method,
    query: { productId }, // Must be same as Dynamic Route file name
    cookies,
  } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(productId);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'PUT') {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default handler;
