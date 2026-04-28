import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname;
  const map: Record<string,string> = {
    '/':'/ru', '/rent':'/ru/rent', '/landlord':'/ru/landlord', '/wspolpraca':'/ru/partnership', '/partnership':'/ru/partnership', '/contact':'/ru/contact', '/buy':'/ru/buy', '/sell':'/ru/sell'
  };
  if (map[p]) return NextResponse.redirect(new URL(map[p], req.url));
  return NextResponse.next();
}

export const config = { matcher: ['/','/rent','/landlord','/wspolpraca','/partnership','/contact','/buy','/sell'] };
