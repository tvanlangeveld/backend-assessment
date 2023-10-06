userDataBase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const arrOfFortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage","A faithful friend is a strong defense","A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way." ]

        let randomIndex = Math.floor(Math.random() * arrOfFortunes.length);
        let randomfortune = arrOfFortunes[randomIndex];

        res.status(200).send(randomfortune)
    },

    submitInfo: (req, res) => {
        console.log(req.body)
        userDataBase.push(req.body)
        res.status(200).send(userDataBase)
    },

    deleteInfo: (req, res) => {
        userDataBase.length = 0;
        res.status(200).send(userDataBase)
    }

    // addUserInfo: (req, res) => {
    //     let {search, userName} = req.body
    //     let newProperty = 

    //     for(let i = 0; i < userDataBase.length; i++){
    //         if(userDataBase[i].firstName === search){
    //         userDataBase.
    //         }
    //     } 
    // }

}