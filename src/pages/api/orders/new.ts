import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await fetch(`${process.env.BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!data.ok) {
      return res.status(404).json({ error: "Failed to create order" });
    } else {
      const order = await data.json();
      return res.status(201).json(order);
    }
  }
}
