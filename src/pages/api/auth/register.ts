import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const response = await fetch(`${process.env.BACKEND_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Registration failed" });
    }

    const data = await response.json();
    return res.status(200).json({ success: true });
  }

  // Not allowing any method other than POST
  res.setHeader("Allow", ["POST"]);
  return res.status(405).end("Method Not Allowed");
}
