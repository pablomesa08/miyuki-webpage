import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET ?? "";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  // Assuming there's a function to verify the token; you might need to implement this.
  if (token && !(await verifyToken(token))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/user/protected",
};

// Function to verify the token; implement according to your auth logic
async function verifyToken(token: string): Promise<boolean> {
  try {
    // Verify the token using the secret key and check for validity
    const decoded = await jwt.verify(token, SECRET_KEY);

    // Assuming the decoded token contains the user's information
    console.log("Decoded token:", decoded);

    return true; // Token is valid
  } catch (error) {
    console.error("Token verification failed:", error);
    return false; // Token is invalid
  }
}
