import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
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
