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
      return res
        .status(response.status)
        .json({ error: "Authentication failed" });
    }

    const data = await response.json();
    const token = data.jwt;
    if (!token) {
      return res
        .status(500)
        .json({ error: "Token was not provided by auth server" });
    }

    // Set cookie with secure and httpOnly flags in a real app!
    const cookieOptions = [
      `auth_token=${token}`,
      "Path=/",
      "HttpOnly",
      process.env.NODE_ENV === "production" ? "Secure" : "",
      "SameSite=Lax", // Can use Strict or Lax depending on your requirements
    ]
      .filter(Boolean)
      .join("; ");

    res.setHeader("Set-Cookie", cookieOptions);
    return res.status(200).json({ success: true });
  }

  // Not allowing any method other than POST
  res.setHeader("Allow", ["POST"]);
  return res.status(405).end("Method Not Allowed");
}
