import { decrypt } from '@vercel/flags'
// import { type NextRequest } from 'next/server';
import { FlagOverridesType } from '@vercel/flags'

async function getFlags(request: any) {
  const overrideCookie = request.cookies['vercel-flag-overrides']
  const overrides = await decrypt<FlagOverridesType>(overrideCookie)

  const flags = {
    exampleFlag: overrides?.exampleFlag ?? false,
  }

  return flags
}
