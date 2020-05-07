import createClient from '@lib/contentful/createClient'
import parseEntry from '@lib/contentful/parseEntry'

const client = createClient({ isPreview: false })

export default (req, res) => {
  client.getEntries()
    .then(response => {
      res.json(response.items.map(entry => parseEntry(entry)))
    })
    .catch(console.error)
    .finally(() => res.end())

}
