import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'
import { createClient } from '@supabase/supabase-js'
import Discord from '@/utils/Discord'
import { uuid } from '@supabase/gotrue-js/src/lib/helpers'

export async function GET(request: NextApiRequest, context: any) {
  const { searchParams } = new URL(request.url || '')

  if (!searchParams.has('code')) {
    return NextResponse.json({
      error: true,
      message: 'Missing access token',
    })
  }

  const code: string = String(searchParams.get('code'))

  try {
    const accessToken = await Discord.getAccessToken(code)

    const supabase = createClient(
      String(process.env.SUPABASE_URL),
      String(process.env.SUPABASE_ANON_KEY)
    )

    const { data, error } = await supabase.from('discord_tokens').insert({
      id: uuid(),
      ...accessToken,
    })

    if (error) {
      return NextResponse.json({
        error: true,
        message: error.message,
      })
    }

    console.log(accessToken, data)

    return NextResponse.json({
      error: false,
      message: 'Successfully generated access token',
    })
  } catch (exception: any) {
    return NextResponse.json({
      error: true,
      message: exception.message,
    })
  }
}
