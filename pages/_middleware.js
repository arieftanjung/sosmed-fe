import { NextRequest, NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.token;
  // console.log(token);

  console.log(req.nextUrl.pathname);
  if (req.nextUrl.pathname === "/home" && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname === "/profile" && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  if (req.nextUrl.pathname === "/register" && token) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}
