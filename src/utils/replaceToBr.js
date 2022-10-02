
/**
 * @param {String} content
 */
 function replaceToBr (content) {
  // 基本情報
  // eslint-disable-next-line no-control-regex
  const REGEX_BR = new RegExp('\r\n|\r|\n', 'gi')
  const _content = content.replace(REGEX_BR, '<br/>')
  return _content
}

export default replaceToBr
