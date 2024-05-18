import type { NextApiResponse } from 'next'

export async function handler(response: NextApiResponse) {
  return response.status(200).json({
    definitions: {
      newFeature: {
        description: 'Controls whether the new feature is visible',
        origin: 'https://example.com/#new-feature',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
    },
  })
}
