const api_url = "https://jsonplaceholder.typicode.com/users"

function getApidata(url){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        displayDataTable(res)
    })
    .catch(err => console.log(err))


}

getApidata(api_url)

function displayDataTable(apidata){
    console.log(apidata)
    for(let i of apidata){
        //Dynamic Row
        var newRow = document.createElement('tr')
        
        //Dynamic Col
        var newtd1 = document.createElement('td')
        var newtd2 = document.createElement('td')
        var newtd3 = document.createElement('td')
        
        //Assigning Data
        newtd1.innerHTML = `${i.name}`
        newtd2.innerHTML = `${i.email}`
        newtd3.innerHTML = `${i.phone}`


        //Appending col to row

        newRow.appendChild(newtd1)
        newRow.appendChild(newtd2)
        newRow.appendChild(newtd3)

        //Appending new row to table body

        document.querySelector('tbody').appendChild(newRow)


    }
}