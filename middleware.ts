// export {auth as middleware} from '@/auth'
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-my-favorite-show", "Breaking Bad");


  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}


export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};