import { createClient } from 'microcms-js-sdk'
let apiKey, serviceDomain

if (process.env._API_KEY && process.env._SERVICE_DOMAIN) {
  apiKey = process.env._API_KEY
  serviceDomain = process.env._SERVICE_DOMAIN
} else {
  throw new Error('APIキーを登録してください')
}

export const microCMSClient = createClient({
  serviceDomain,
  apiKey,
})
