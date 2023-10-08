const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const submitBtn = document.getElementById('submitBtn')
const updateBtn = document.getElementById('update')
const existingFirstName = document.getElementById('existingFristName')
const updatedFirstName = document.getElementById('newFirstName')
const deleteBtn = document.getElementById('deleteBtn')
const deleteInput = document.getElementById('deleteInput')



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



// const existingFirstName = document.getElementById('existingFristName')
// const updatedFirstName = document.getElementById('newFirstName')

const updateName = (event) => {
    event.preventDefault()
    let updatedName = {
        firstName: updatedFirstName.value
    }

    axios.put(`http://localhost:4000/api/submitInfo/${existingFirstName.value}`, updatedName)
    .then(res => {
        console.log(res.data)

    })
}


const deleteName = (event) => {
    event.preventDefault()


    axios.delete(`http://localhost:4000/api/submitInfo/${deleteInput.value}`)
    .then(res => {
        console.log(res.data)
    })
}






    deleteBtn.addEventListener('click', deleteName )
    updateBtn.addEventListener('click', updateName)
    submitBtn.addEventListener('click', submitInfo)
    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)



