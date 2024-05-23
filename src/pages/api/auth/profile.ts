import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("getting info of user");

    const profile = await fetch(`${process.env.BACKEND_URL}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.auth_token}`,
      },
    });

    if (!profile.ok) {
      return res.status(404).json({ error: "Profile not found" });
    }

    const profileData = await profile.json();
    return res.status(200).json(profileData);
  }
}
