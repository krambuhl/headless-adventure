export default function TextNode({
  value,
  bold,
  italic,
  underline,
  code
}) {
  let res = <React.Fragment>{value}</React.Fragment>

  if (bold) res = <strong>{res}</strong>
  if (italic) res = <em>{res}</em>
  if (underline) res = <u>{res}</u>
  if (code) res = <code>{res}</code>

  return res
}
