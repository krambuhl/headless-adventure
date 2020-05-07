import classnames from 'classnames'
import css from './PublishStatusIndicator.module.css'

export default function PublishStatusIndicator ({
  previewMode,
  className,
  ...props
}) {
  const classList = classnames(css.root, className)
  const view = previewMode ? 'Draft' : 'Published'
  const href = previewMode ? '/api/stop-preview' : '/api/start-preview'

  const handleClick = () => {
    fetch(href)
      .then(() => location.reload())
  }

  return (
    <div className={classList} {...props}>
      Viewing: <a href="#" onClick={handleClick} className={css.highlight}>{view}</a>
    </div>
  )
}
