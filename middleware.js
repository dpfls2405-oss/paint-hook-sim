import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.cookies.get('auth')?.value
  const { pathname } = request.nextUrl

  if (pathname === '/login') return NextResponse.next()

  if (auth !== '6720') {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/login'
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
