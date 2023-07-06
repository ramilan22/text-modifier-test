import { NextResponse,NextRequest } from "next/server";

export function middleware(request:NextRequest) {

    const origin =  request.headers.get('origin');
    console.log(origin);

    const res = NextResponse.next();

    res.headers.set('Access-Control-Allow-Origin', '*'); // Replace '*' with the appropriate origin or set it to '*' to allow all origins
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.headers.set('Access-Control--Max-Age', '86400');

console.log('Middleware!')
console.log(request.method)
console.log(request.url)

return res

}

export const config = {
    matcher:'/api/:path*'
}