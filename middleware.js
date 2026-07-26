import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export function middleware(request) {

  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  console.log("TOKEN:", token);

  if (!token) {
    console.log("NO TOKEN");
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decoded);

    return NextResponse.next();

  } catch (error) {

    console.log("JWT ERROR:", error.message);

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

}

export const config = {
  matcher: ["/admin/:path*"]
};