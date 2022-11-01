let EmplData = []; 

fetch('https://reqres.in/api/users/', { 
    method: 'GET',
})
.then((response) => {
    return response.json() 
})
.then((users) => {
    console.log(users);
    EmplData = users.data 
})
.catch((error) => {
    console.error(error); 
})
.finally(() => { 
    for(let i = 0; i < EmplData.length; i++) {
        let empl = EmplData[i];
        cards(empl);
    }
})

// Making cards 

const cards = (user) => {
    document.getElementById('cards').innerHTML += `
    
    <div class="flip-card">
        <div class="cards-inside">
            <div class="card-front">
                <img src="${user.avatar}">
            </div>
            <div class="card-back">
                <h1>${user.first_name} ${user.last_name}</h1> 
                <p>${user.email}</p> 
            </div>
        </div>
    </div>
    `
}