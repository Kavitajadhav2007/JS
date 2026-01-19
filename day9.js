async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()
    console.log(data)
}



async function loadUsers() {

    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await res.json()

        let list = document.getElementById("users")

        users.forEach( user => 
        {

           let names = document.createElement("li");
            // <li> </li> 
            names.innerHTML = "Name :  " + user.name  + "<br>"+ "   Email :  " + user.email
            // <li> names(xyz) </li>
            list.appendChild(names)
        })

    }catch(Error){
        alert(Error)
    }
    
}


loadUsers()