import { Heading } from '@components/display'

export default function IndexPage(props) {
  console.log(props)

  return (
    <React.Fragment>
      <Heading variant={Heading.h1}>Test</Heading>
    </React.Fragment>
  )
}

export const getStaticProps = async ({ preview }) => {
  return {
    props: {
      previewMode: !!preview
    }
  }
}

