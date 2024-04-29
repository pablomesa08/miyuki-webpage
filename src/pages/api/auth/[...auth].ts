// pages/api/auth/[...auth].ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return res.status(response.status).json({ error: "Server error" });
    }

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error("Error parsing JSON", err);
      return res.status(500).json({ error: "Error parsing JSON" });
    }

    return res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
