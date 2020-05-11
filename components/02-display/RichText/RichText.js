import classnames from 'classnames'
import css from './RichText.module.css'

import { NodeMatrix } from '@components/utils'

export default function RichText ({
  className,
  children,
  ...props
}) {
  const classList = classnames(css.root, className)

  return (
    <div className={classList} {...props}>
      <NodeMatrix {...children} />
    </div>
  )
}
