const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const name = document.getElementById('name')
const group = document.getElementById('group')
const idcard = document.getElementById('idcard')
const date = document.getElementById('date')
const email = document.getElementById('email')


form.addEventListener('submit', (e) => {
    let errorMessages = []

    const nameRegex = /[\u0430-\u0457]{1,20}\s[\u0430-\u0457]\.[\u0430-\u0457]\.$/gi
    const groupRegex = /[а-\u0457]{2}-[0-9]{2}$/gi
    const idRegex = /[A-Z]{2} [#№][0-9]{6}$/g
    const dateRegex = /^[0-9]{1,2}[.][0-9]{1,2}[.][0-9]{4}$/
    const emailRegex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i


    if (! nameRegex.test(name.value)) {
        errorMessages.push('Введіть ПІБ у форматі "ТТТТТТТТ Т.Т."')
    }

    if (! groupRegex.test(group.value)){
        errorMessages.push('Введіть шифр групи у форматі "ТТ-ЧЧ"')
    }

    if (! idRegex.test(idcard.value)){
        errorMessages.push('Введіть номер ID-картки у форматі "ТТ №ЧЧЧЧЧЧ"')
    }

    if (! dateRegex.test(date.value)){
        errorMessages.push('Введіть дату народження у форматі "ЧЧ.ЧЧ.ЧЧЧЧ')
    }

    if (! emailRegex.test(email.value)){
        errorMessages.push('Введіть e-mail у форматі ттттт@ттттт.ттт')
    }


    if (errorMessages.length > 0){
        e.preventDefault()
        errorElement.innerText = errorMessages.join('\n')
        errorElement.style.cssText = `
            padding: 10px;
            margin-bottom: 5px;
            border-radius: 10px;
        `
    }
})

const inputColor = document.getElementById('inputColor')
const randomColor = cell => cell.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
const changeInputColor = cell => cell.style.background = inputColor.value

const changeColumnColor = (cell) => {
    const table = cell.parentNode.parentNode;
    var columns = table.getElementsByTagName("td") ;
        for(var i = 0; i <= columns.length; i++)
        {
            if(i%2!=0){
                columns[i].style.backgroundColor =  inputColor.value;
            }
        }
}
