/**
 * @param {string} path 判断字符串是否是https?:|mailto:|tel: 开头的
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validPassword(str) {
  return (str.length > 3 && str.length < 12)
}
