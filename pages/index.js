import Link from 'next/link'
import { RichText } from '@components/display'
import { drafts, published } from '@lib/contentful/clients'
import { clientWrapper } from '@lib/contentful/helpers'


export default function IndexPage(props) {
  const { entries } = props

  return (
    <React.Fragment>
      {
        entries.map(({ id, name, description }) => (
          <div key={id} style={{ marginBottom: 20, border: '3px solid red' }}>
            <h1><Link href="/[id]" as={`/${id}`}><a>{name}</a></Link></h1>
            <RichText style={{ marginTop: 10 }}>{description}</RichText>
          </div>
        ))
      }
    </React.Fragment>
  )
}

export const getStaticProps = async ({ preview }) => {
  const client = preview ? drafts : published
  const entries = await clientWrapper(client.getEntries())

  return {
    props: {
      entries,
      previewMode: !!preview
    }
  }
}
