import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { NextApiRequest, NextApiResponse } from "next";

const JWT_SECRET = process.env.JWT_SECRET || "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.auth_token ?? Cookies.get("auth_token");

    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }

    // Assuming you have a function or a way to verify JWT
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("JWT verification failed", err);
        return res.status(200).json({ isAuthenticated: false });
      }
      console.log("JWT decoded", decoded);
      res.status(200).json({ isAuthenticated: true });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
