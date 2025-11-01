import { auth } from '@/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnAccount = req.nextUrl.pathname.startsWith('/account');

  if (isOnAccount && !isLoggedIn) {
    return Response.redirect(new URL('/login', req.nextUrl));
  }

  return;
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
