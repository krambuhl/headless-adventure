import classnames from 'classnames'
import {
  Heading
} from '@components/display'
import css from './Asset.module.css'

export default function Asset({
  name,
  title,
  description,
  file,
  className,
  ...props
}) {
  const classList = classnames(css.root, className)
  const { url, contentType, aspectRatio } = file

  let media = null
  if (contentType.indexOf('image/') === 0) {
    media = <img src={url} />
  } else if (contentType.indexOf('video/') === 0) {
    media = (
      <video autoPlay muted loop>
        <source src={url} />
      </video>
    )
  }

  return (
    <div className={classList} {...props}>
      <Heading variant={Heading.h3} className={css.name}>Asset: {title} ({contentType})</Heading>
      {media}
    </div>
  )
}

