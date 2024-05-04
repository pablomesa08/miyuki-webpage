import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // set favorite product, its a post request and in the body we have the product id, search in the req.body.productId if it exist to set it as favorite
  const { productId, status } = JSON.parse(req.body);

  if (req.method === "POST" && productId) {
    console.log("changing favorite product of id", productId);
    if (status) {
      console.log("adding favorite product");
      const data = await fetch(
        `${process.env.BACKEND_URL}/auth/favorites/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${req.cookies.auth_token}`,
          },
        }
      );
      if (!data.ok) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json(await data.json());
    } else {
      console.log("removing favorite product");
      const data = await fetch(
        `${process.env.BACKEND_URL}/auth/favorites/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${req.cookies.auth_token}`,
          },
        }
      );
      if (!data.ok) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.status(200).json(await data.json());
    }
  }

  // get all favorite products
  if (req.method === "POST") {
    console.log("getting all favorite products");
    const data = await fetch(`${process.env.BACKEND_URL}/auth/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
    });

    if (!data.ok) {
      return res.status(404).json({ error: "Favorites not found" });
    }

    return res.status(200).json(await data.json());
  }
}
