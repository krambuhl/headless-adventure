import { Entry } from '@components/container'
import { drafts, published } from '@lib/contentful/clients'
import { clientWrapper } from '@lib/contentful/helpers'

export default function IndexPage(props) {
  const { entry } = props

  return (
    <React.Fragment>
      <Entry {...entry} />
    </React.Fragment>
  )
}

// const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : null
export const getStaticProps = async ({ preview, params }) => {
  const { id } = params
  const client = preview ? drafts : published
  const entry = await clientWrapper(client.getEntry(id))

  return {
    props: {
      entry,
      previewMode: !!preview
    }
  }
}

export const getStaticPaths = async () => {
  const entries = await clientWrapper(published.getEntries())

  return {
    paths: entries.map((x = {}) => `/${x.id}`),
    fallback: true,
  }
}
