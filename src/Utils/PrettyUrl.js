export function PrettyUrl(title) {
  var noSpace = title.split(' ').join('-')
  var url = noSpace.replace('--', '')
  console.log(url)
  return url
}
