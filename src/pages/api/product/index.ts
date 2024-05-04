// Este archivo manejará la solicitud GET para obtener todos los productos
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("getting all products");
    const products = await fetch(`${process.env.BACKEND_URL}/products`);

    if (!products.ok) {
      return res.status(404).json({ error: "Products not found" });
    }

    // Devolver los datos de los productos
    return res.status(200).json(await products.json());
  }

  // Manejar otros métodos HTTP como POST, PUT, etc., o devolver un 405 Method Not Allowed
  res.setHeader("Allow", ["GET"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
