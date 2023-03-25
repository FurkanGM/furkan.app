import { getBaseUrl } from '@/utils/helper'

export interface DiscordRequest {
  [key: string]: string | undefined
}

export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

export default class Discord {
  static async doRequest(
    endpoint: string,
    request: DiscordRequest | null,
    method: string = 'POST',
    headers: { [key: string]: string } = {}
  ) {
    const response = await fetch(`https://discord.com/api/v10/${endpoint}`, {
      method: 'GET',
      ...(request
        ? { body: new URLSearchParams(request as Record<string, string>) }
        : null),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headers,
      },
    })

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(
        `Failed to exchange code: ${response.status} ${responseData.error}`
      )
    }

    return responseData as TokenResponse
  }

  static async getAccessToken(code: string): Promise<TokenResponse> {
    return await this.doRequest('oauth2/token', {
      client_id: String(process.env.DISCORD_CLIENT_ID),
      client_secret: String(process.env.DISCORD_CLIENT_SECRET),
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `${getBaseUrl()}/api/discord/callback`,
    })
  }

  static async getRefreshToken(refreshToken: string): Promise<TokenResponse> {
    return await this.doRequest('oauth2/token', {
      client_id: String(process.env.DISCORD_CLIENT_ID),
      client_secret: String(process.env.DISCORD_CLIENT_SECRET),
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    })
  }

  static async getCurrentUser(token: string) {
    return await this.doRequest('users/@me/connections', null, 'GET', {
      Authorization: `Bearer ${token}`,
    })
  }

  static async getUser(token: string, userId: string | number) {
    return await this.doRequest(`users/${userId}`, null, 'GET', {
      Authorization: `Bearer ${token}`,
    })
  }
}
