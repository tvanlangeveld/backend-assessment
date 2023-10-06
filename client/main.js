const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const submitBtn = document.getElementById('submitBtn')
const addUser = document.getElementById('addUser')
const userName = document.getElementById('username')
const search = document.getElementById('usersFirst')
const deleteBtn = document.getElementById('deleteBtn')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const fortune = res.data;
        alert(fortune)
    })

}

const submitInfo = (event) => {
    event.preventDefault()
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')

    let info = {
        firstName: firstName.value,
        lastName: lastName.value
    }
    axios.post("http://localhost:4000/api/submitInfo/", info)
    .then(res => {

        console.log(res.data)

    })

}

const addUserInfo = (event) => {
    event.preventDefault()
    let addedInfo = {
        search: search.value,
        userName: userName.value
    }
    axios.put("http://localhost:4000/api/username/", addedInfo)
    .then(res => {
        console.log(res.data)
    })
}

const deleteUser = (event) => {
    axios.delete("http://localhost:4000/api/delete/")
    .then(res => {
        alert('all gone')
    })
}




addUser.addEventListener('click', addUserInfo)
submitBtn.addEventListener('click', submitInfo)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)



