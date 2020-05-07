import { drafts, published } from '@lib/contentful/clients'
import parseEntry from '@lib/contentful/parseEntry'

export default (req, res) => {
  const { id, preview } = req.query
  const client = preview !== undefined ? drafts : published

  client.getAsset(id)
    .then(response => res.json(parseEntry(response)))
    .catch(err => {
      if (err.sys) {
        res.json(err.sys)
      }
    })
    .finally(() => res.end())
}

