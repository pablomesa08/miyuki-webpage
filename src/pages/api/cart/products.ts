import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("getting all products from cart");
    const products = await fetch(`${process.env.BACKEND_URL}/cart/userCart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
    });

    if (!products.ok) {
      return res.status(404).json({ error: "Products not found" });
    }

    // Devolver los datos de los productos
    const productsData = await products.json();
    return res.status(200).json(productsData);
  }

  if (req.method === "POST") {
    console.log("adding product to cart");
    const { productId } = JSON.parse(req.body);
    const product = await fetch(`${process.env.BACKEND_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
      body: JSON.stringify({ productId }),
    });

    if (!product.ok) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(await product.json());
  }

  if (req.method === "DELETE") {
    console.log("removing product from cart");
    const { productCartId } = req.body; // Cambio aquí, usando req.body directamente.
    const product = await fetch(
      `${process.env.BACKEND_URL}/cart/${productCartId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${req.cookies.auth_token}`,
        },
      }
    );

    if (!product.ok) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json({ success: true });
  }
}
