import * as dotenv from 'dotenv'
dotenv.config()

import { createClient } from 'microcms-js-sdk'
let apiKey, serviceDomain

if (process.env.API_KEY && process.env.SERVICE_DOMAIN) {
  apiKey = process.env.API_KEY
  serviceDomain = process.env.SERVICE_DOMAIN
} else {
  throw new Error('APIキーを登録してください')
}

export const microCMSClient = createClient({
  serviceDomain,
  apiKey,
})
