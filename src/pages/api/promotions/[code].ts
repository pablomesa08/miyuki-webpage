import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (req.method === "GET") {
    console.log("getting promotion by code:", code);
    const promotion = await fetch(
      `${process.env.BACKEND_URL}/promotions/${code}`
    );

    if (!promotion.ok) {
      return res.status(404).json({ error: "Promotion not found" });
    }

    // Return the promotion data
    return res.status(200).json(await promotion.json());
  }

  res.setHeader("Allow", ["GET"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
