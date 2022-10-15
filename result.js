const formDataElement = document.getElementById('form-data')

new URLSearchParams(window.location.search).forEach((value, name) => {
    formDataElement.append(`${name}: ${value}`)
    formDataElement.append(document.createElement('br'))
})