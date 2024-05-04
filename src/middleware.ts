import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET ?? "");

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  // Logic to redirect to / if the user is not authenticated
  if (request.nextUrl.pathname === "/user/auth" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (request.nextUrl.pathname === "/user/auth" && !token) {
    return NextResponse.next();
  }

  // Logic to redirect to / if the user is already authenticated
  if (request.nextUrl.pathname === "/user/register" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (request.nextUrl.pathname === "/user/register" && !token) {
    return NextResponse.next();
  }

  // if the token is not present or invalid, return to /login
  if (!token || !(await verifyToken(token))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/protected", "/user/auth", "/user/register", "/user/profile"],
};

// Function to verify the token; implement according to your auth logic
async function verifyToken(token: string): Promise<boolean> {
  try {
    // Verify the token using the secret key and check for validity
    await jwtVerify(token, JWT_SECRET);

    // Assuming the decoded token contains the user's information
    //console.log("Decoded token:", decoded);

    return true; // Token is valid
  } catch (error) {
    console.error("Token verification failed:", error);
    return false; // Token is invalid
  }
}
