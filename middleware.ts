import NextAuth from "next-auth";

import { authConfig } from "./auth.config";

export const {auth: middleware } = NextAuth(authConfig)









// export {auth as middleware} from '@/auth'

// import { NextRequest, NextResponse } from "next/server";


// export async function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-my-favorite-show", "Breaking Bad");


//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }


// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };




// import { cookies } from 'next/headers';
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// export async function middleware(req: NextRequest) {
//   const session =
//     req.cookies.get("__Secure-next-auth.session-token") ||
//     req.cookies.get("next-auth.session-token")

//   if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/login", req.url))
//   }
  
//   const cookiesObject = await cookies();
//    if(cookiesObject.get('sessionCartId')){
//         // generate new session cart id cookie
//         const sessionCartId = crypto.randomUUID()
//         // clone request header
//         const newRequestHeaders = new Headers(request.headers);
//         // create new response and the new headres
//         const response = NextResponse.next({
//           request:{
//             headers:newRequestHeaders 
//           }
//         })
//         // set newly generated sessionCardId in the response cookies
//         response.cookies.set('sessionCartId', sessionCartId)

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// }