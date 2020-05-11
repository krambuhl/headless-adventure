import {
  Heading,
  RichText,
  TextNode,
} from '@components/display'
import {
  Asset,
  Entry
} from '@components/container'

export default function NodeMatrix (contentProps) {
  const { nodeType, content, ...rest } = contentProps
  const children = (
    Array.isArray(content) ? (
      content.map((props, i) => {
        return <NodeMatrix key={`${props.nodeType}-${i}`} {...props} />
      })
    ) : null
  )

  const props = { ...rest, children }

  switch (nodeType) {
    case 'document': return <React.Fragment>{children}</React.Fragment>
    case 'paragraph': return <p {...props} />
    case 'hr': return <hr />
    case 'ordered-list': return <ol {...props} />
    case 'unordered-list': return <ul {...props} />
    case 'list-item': return <li {...props} />
    case 'blockquote': return <blockquote {...props} />
    case 'heading-1': return <Heading variant={Heading.h1} {...props} />
    case 'heading-2': return <Heading variant={Heading.h2} {...props} />
    case 'heading-3': return <Heading variant={Heading.h3} {...props} />
    case 'heading-4': return <Heading variant={Heading.h4} {...props} />
    case 'heading-5': return <Heading variant={Heading.h5} {...props} />
    case 'heading-6': return <Heading variant={Heading.h6} {...props} />
    case 'text': return <TextNode {...rest} />
    case 'embedded-entry-block':
    case 'embedded-entry-inline': return (
      <Entry {...props.entry} />
    )

    case 'embedded-asset-block': return (
      <Asset {...props.asset} />
    )

    case 'hyperlink': return <a href={props.uri} {...props} />
    case 'entry-hyperlink': return <a href={`/${props.entry.id}`} {...props} />
    case 'asset-hyperlink': return <a href={`/${props.asset.file.url}`} {...props} />

    default: return (
      <span data-type={nodeType} style={{ color: '#f00' }}>({nodeType}) {JSON.stringify(props, null, 2)}</span>
    )
  }
}
