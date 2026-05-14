import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Optional Basic-Auth gate.
 *
 * To enable: create a .env.local file with:
 *   BASIC_AUTH_USER=yourname
 *   BASIC_AUTH_PASS=yourpassword
 *
 * Remove this file entirely to make the portfolio fully public.
 * On Vercel, set the same env vars in Project → Settings → Environment Variables.
 */

const AUTH_USER = process.env.BASIC_AUTH_USER;
const AUTH_PASS = process.env.BASIC_AUTH_PASS;

export function middleware(request: NextRequest) {
  // Auth disabled — no env vars set
  if (!AUTH_USER || !AUTH_PASS) return NextResponse.next();

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
      const [user, pass] = decoded.split(':');
      if (user === AUTH_USER && pass === AUTH_PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse('Unauthorized — Portfolio is password protected.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Portfolio", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
