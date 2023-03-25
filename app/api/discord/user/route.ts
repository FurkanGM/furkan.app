import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'
import { createClient } from '@supabase/supabase-js'
import Discord from '@/utils/Discord'

export async function GET(request: NextApiRequest) {
  const supabase = createClient(
    String(process.env.SUPABASE_URL),
    String(process.env.SUPABASE_ANON_KEY)
  )

  let { data, error } = await supabase
    .from('discord_tokens')
    .select('access_token')
    .order('created_at', {
      ascending: false,
    })
    .limit(1)

  if (data) {
    const accessToken = String(data[0].access_token)
    const user = await Discord.getCurrentUser(accessToken)

    console.log(user)
  }

  return NextResponse.json({
    error: true,
  })
}
