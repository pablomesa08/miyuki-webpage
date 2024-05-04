import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET" && req.query.product) {
    console.log("getting product by id");
    const productId = req.query.product[0];
    const product = await fetch(
      `${process.env.BACKEND_URL}/products/${productId}`
    );

    if (!product.ok) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Return the product data
    return res.status(200).json(await product.json());
  }
}
