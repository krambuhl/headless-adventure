function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

function parseText({ nodeType, value, marks }) {
  const markList = marks.map(m => m.type)
  const res = { nodeType, value }

  if (markList.indexOf('bold') >= 0) res.bold = true
  if (markList.indexOf('italic') >= 0) res.italic = true
  if (markList.indexOf('underline') >= 0) res.underline = true
  if (markList.indexOf('code') >= 0) res.code = true

  return res
}

function parseContainer({ nodeType, content, data }, depth = 10) {
  const res = { nodeType }

  if (content.length > 0) {
    res.content = content.map(parseNode)
  }

  if (Object.keys(data).length > 0) {
    const { target, ...rest } = data

    if (target) {
      if (target.sys.type === 'Entry') {
        rest.entry = parseEntry(target, depth - 1)
      }

      if (target.sys.type === 'Asset') {
        rest.asset = parseEntry(target, depth - 1)
      }
    }

    return {
      ...res,
      ...rest
    }
  }

  return res
}

function parseFile({ details, ...rest }) {
  const res = { ...rest }

  if (details.image) {
    res.aspectRatio = details.image.height / details.image.width
  }

  return res
}

function parseNode(node, depth = 10) {
  if (node.nodeType === 'text') {
    return parseText(node)
  }

  return parseContainer(node, depth)
}

function parseField(field, depth = 10) {
  if (Array.isArray(field)) return field.map(entry => parseField(entry, depth))
  if (field.nodeType !== undefined) return parseNode(field, depth)
  if (field.url !== undefined) return parseFile(field)

  return field
}

function parseFields(fields, depth = 10) {
  return Object.keys(fields).reduce((prev, key) => ({
    ...prev,
    [key]: parseField(fields[key], depth)
  }), {})
}

export default function parseEntry(data, depth = 10) {
  const { sys, fields } = data
  const { id, contentType: entryType, type: assetType } = sys
  const contentType = assetType === 'Entry' ? capitalize(entryType.sys.id) : assetType

  if (depth <= 0) return { id, contentType }

  return {
    id,
    contentType,
    ...parseFields(fields, depth)
  }
}
