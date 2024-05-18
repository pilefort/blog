import { getLaunchDarklyData } from '@vercel/flags/providers/launchdarkly';
import { NextResponse } from 'next/server';

export async function GET() {
  const launchDarklyData = await getLaunchDarklyData({ 
    apiKey: 'api key', 
    projectKey: 'project key', 
    environment: 'environment value', 
  });
  return NextResponse.json(launchDarklyData);
}
