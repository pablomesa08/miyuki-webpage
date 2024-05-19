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
    console.log(req.body);
    const product = await fetch(`${process.env.BACKEND_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
      body: JSON.stringify(req.body), // Asegúrate de que es una cadena JSON
    });

    if (!product.ok) {
      const errorResponse = await product.text(); // Captura la respuesta de error para diagnóstico
      console.error("Error response:", errorResponse);
      return res
        .status(product.status)
        .json({ error: "Product not found", details: errorResponse });
    }
    const products = await product.json();
    console.log("productos en carrito", products);
    return res.status(200).json(products);
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
