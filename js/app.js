const apiURL = "https://jsonplaceholder.typicode.com/posts"
const datalist = document.getElementById('dataList')
document.addEventListener("DOMContentLoaded", function(){
    const fetchData = document.getElementById('fetchDataBtn')
    fetchData.addEventListener('click',() => {
        // call method to fetchdata
        const method = "GET" 
        performFetch(method,apiURL)
    })

    const form = document.getElementById('pushContent')
    form.addEventListener('submit', function(){
        postData()
    })
})

function postData(){
    const titleinput = document.getElementById('title').value;
    const bodyinput = document.getElementsById('body').value;
    
    const postData = {
        "userId" : 1,
        "id" : 1,
        "title" : titleinput,
        "body" : bodyinput
    }

    const method = "POST"
    performFetch(method,apiURL,postData)
}

// my modular fetch function 
// 1. data 2. url 3. method (verb) 
//DEFENSIVE PROGRAMMING
// try /catch / finally
async function performFetch(method,url,data = null){
    console.log(postData,method)
    try {
        //  configuration object 
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        // if data is not null (POST < PATCH < DELETE (data involved))
        if(data !== null){
            options.body = JSON.stringify(data)
        }
        //call fetch 
        const response = await fetch(url,options)
        console.log(response)
        //check response status 
        if(!response.ok){
            //handle the error 
            alert(`Error : ${response.status}`)
        }
        // parse /convert to json 
        const responseData = await response.json()
        //call a callback function to handle the response data
        handleResponse(responseData)
    } catch(error){
        console.log("error is " + error.message)
        alert(error.message)
    }
}

// function to handle the response 
function handleResponse(data){
    console.log(data)
    //clear existing listing items 
    datalist.innerHTML = '';
    //iterate over the data and create the list items
    // array -> data types operations 
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.title
        datalist.appendChild(li)
    })

}

