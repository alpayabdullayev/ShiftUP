const baseUrl="http://localhost:3000/contacts"

async function fetchData() {
    try {
        const response=await axios.get(baseUrl)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
fetchData()


async function createPost(){
    const nameInput = document.getElementById('name-inp').value
    const emailInput = document.getElementById('email-inp').value
    const messageInput = document.getElementById('msg-inp').value
    try {
        
        await axios.post(baseUrl,{
           
            name: nameInput,
            email: emailInput,
            message: messageInput
        })
    fetchData()

    } catch (error) {
        console.log(error);
    }
}