import { NextRequest, NextResponse } from 'next/server'
import { getBaseUrl } from '@/utils/helper'

export const config = {
  matcher: '/api/discord/callback',
}

export function middleware(request: NextRequest) {
  if (request.ip !== process.env.AUTHORIZED_IP_ADDRESS) {
    return NextResponse.redirect(getBaseUrl())
  }

  return NextResponse.next()
}
