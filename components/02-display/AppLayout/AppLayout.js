import classnames from 'classnames'
import css from './AppLayout.module.css'

export default function AppLayout ({
  className,
  children,
  ...props
}) {
  const classList = classnames(css.root, className)

  return (
    <div className={classList} {...props}>
      <div className={css.container}>
        {children}
      </div>
    </div>
  )
}
