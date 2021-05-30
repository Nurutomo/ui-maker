$(document).ready(function () {
  const params = Object.fromEntries(new URL(location.href).searchParams.entries())
  console.log(params)

  $('[id^=search-params-]').each(function (i, el) {
    const e = $(el)
    const key = e.attr('id').replace('search-params-', '')
    const value = params[key] != null ? params[key] : ''
    switch (e.prop('tagName').toLowerCase()) {
      case 'img':
      case 'video':
      case 'audio':
        e.attr('src', value)
        break
      default:
        e.text(value)
    }
  })
})
