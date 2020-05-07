import createClient from '@lib/contentful/createClient'

export const drafts = createClient({ isPreview: true })
export const published = createClient({ isPreview: false })
