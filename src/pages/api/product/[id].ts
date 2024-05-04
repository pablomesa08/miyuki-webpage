// Este archivo manejará la solicitud GET para obtener un producto específico por ID
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    console.log("getting product by id:", id);
    const product = await fetch(`${process.env.BACKEND_URL}/products/${id}`);

    if (!product.ok) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Devolver los datos del producto
    return res.status(200).json(await product.json());
  }

  res.setHeader("Allow", ["GET"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
