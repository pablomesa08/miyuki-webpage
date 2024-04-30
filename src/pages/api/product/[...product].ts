import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // First, we have two gets
  // One is for the product list
  // The other is for a single product

  // The second get is for a single product
  if (req.method === "GET" && req.query.product) {
    // Get the product id from the query
    const productId = req.query.product[0];
    // Get the product data from the database
    const product = await fetch(
      `${process.env.BACKEND_URL}/products/${productId}`
    );

    // If the product is not found, return a 404
    if (!product.ok) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Return the product data
    return res.status(200).json(await product.json());
  }
}
