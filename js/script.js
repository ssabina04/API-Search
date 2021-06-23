const API = 'https://randomuser.me/api/?results='
const num = document.getElementById('limitUsers')
const output = document.getElementById('output')


const getUser = async () => {
    let num2 = num.value
    const url = API + num2
    const request = await fetch(url)
    const response = await request.json()
    console.log(response)
    renderUser(response)
}



const renderUser = (data) =>{
    output.innerHTML = ''
     data.results.forEach(user => {
        let userImg = document.createElement('img')
        let name = document.createElement('strong')
        let cell = document.createElement('p')
        let email = document.createElement('p')
        let address = document.createElement('p')
        let nationality = document.createElement('p')
        let gender = document.createElement('p')




        userImg.src = user.picture.thumbnail
        name.innerHTML = `name: ${user.name.tittle} ${user.name.last} ${user.name.last}`
        cell.innerHTML = user.cell
        email.innerHTML = user.email
        address.innerHTML = user.location
        nationality.innerHTML = user.nat
        gender.innerHTML = user.gender

        output.append(userImg, cell, name, email, location, nationality)
    })
    
}
num.addEventListener('change', getUser)
document.body.append(output)
