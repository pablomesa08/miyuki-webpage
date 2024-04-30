import { jwtVerify } from "jose";
import Cookies from "js-cookie";
import { NextApiRequest, NextApiResponse } from "next";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET ?? "");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.auth_token ?? Cookies.get("auth_token");

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    // Assuming you have a function or a way to verify JWT
    jwtVerify(token, JWT_SECRET);
    return res.status(200).json({ isAuthenticated: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
