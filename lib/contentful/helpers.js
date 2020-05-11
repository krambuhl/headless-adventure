import parseEntry from '@lib/contentful/parseEntry'

export const clientWrapper = (endpoint) => (
  endpoint
    .then(response => {
      if (response.items) {
        return response.items.map(entry => parseEntry(entry))
      }

      return parseEntry(response)
    })
    .catch(err => {
      if (err.sys) {
        return err.sys
      }
    })
)
