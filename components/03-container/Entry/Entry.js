import classnames from 'classnames'
import css from './Entry.module.css'

import {
  Heading,
  RichText
} from '@components/display'

export default function Entry({
  name,
  contentType,
  content,
  className,
  ...props
}) {
  const classList = classnames(css.root, className)

  return (
    <div className={classList} {...props}>
      <Heading variant={Heading.h3} className={css.name}>{contentType}: {name}</Heading>
      <RichText style={{ marginTop: 20 }}>{content}</RichText>
    </div>
  )
}

