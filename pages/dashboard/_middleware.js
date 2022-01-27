import { NextResponse } from "next/server";

export default function middleware(req) {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return NextResponse.redirect("/login");
  }
}
