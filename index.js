$(document).load(function () {
  const params = Object.fromEntries(new URL(location.href).searchParams.entries())
  console.log(params)

  $('[id|=search-params-]').each(function (i, el) {
    const e = $(el)
    const key = e.attr('id').replace('search-params-', '')
    const value = params[key]
    e.text(value != null ? value : '')
  })
})
