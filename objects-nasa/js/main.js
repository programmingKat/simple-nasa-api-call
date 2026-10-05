//The user will enter a date. 
//Use that date to get the NASA picture of the day from that date! 
// https://api.nasa.gov/

//https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=heNn6G0R0KkFSajKIcbPiVShGyRglliwvfsecdys
//"https://science.nasa.gov/wp-json/wp/v2/apod-basic/heNn6G0R0KkFSajKIcbPiVShGyRglliwvfsecdys&date=${inputDate}"
document.querySelector('button').addEventListener('click', displayPicDay)
//h2
//img
//description
function displayPicDay(){
    let inputDate = document.querySelector('input').value
    //.replaceAll("-","")
    console.log(inputDate)
//zHUeWEVQ5nf67uEys5Pg1GLCtSHJNslKQJZHfDeG
    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=zHUeWEVQ5nf67uEys5Pg1GLCtSHJNslKQJZHfDeG&date=${inputDate}`)
    //step 1: take result and parse it into json
    .then(res => res.json())
    //step 2: do stuff here:
    .then(data => { 
        console.log(data) 
        document.querySelector('h2').innerText = data[0].title
        //img data.hdurl
        document.querySelector('img').src = data[0].hdurl
        //description data.explanation
        document.querySelector('h3').innerHTML = data[0].explanation
    })
    //try catch error here
    .catch(err => {
    console.log(`error: ${err}`)
    })
}

