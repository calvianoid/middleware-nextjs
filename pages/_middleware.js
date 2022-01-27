import { NextResponse } from "next/server";
export default function middleware(req) {
  const { token } = req.cookies;
  console.log(token);
  const url = req.url;
  console.log(req.url);

  if (token && url == "http://localhost:3000/login") {
    return NextResponse.redirect("/dashboard");
  }
}
