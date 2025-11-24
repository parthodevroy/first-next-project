
// import { NextResponse } from 'next/server';

// export function proxy(request) {
//   console.log(request);
  
//   const token = request.cookies.get('token'); 
//   const url = request.nextUrl.clone();

//   if (!token) {
   
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
  
//   ],
// };
import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token"); // server-side cookie read
  const url = request.nextUrl.clone();

  if (!token) {
    // Token না থাকলে /login এ redirect
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // token থাকলে allow
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/MyProduct/:path*",
    "/chartlist/:path*",
  ],
};
