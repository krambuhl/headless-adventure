import { drafts, published } from '@lib/contentful/clients'
import parseEntry from '@lib/contentful/parseEntry'

export default (req = {}, res) => {
  const { preview } = req.query || {}
  const client = preview ? drafts : published

  return client.getEntries()
    .then(response => {
      res.json(response.items.map(entry => parseEntry(entry)))
    })
    .catch(err => {
      if (err.sys) {
        res.json(err.sys)
      }
    })
    .finally(() => res.end())
}
