//Declare all data showing place
const contentArea = document.querySelector('#content')

//create empyt array
let randomImageValueArray = [];

//generate random number and push to array
for (let i = 1; i < 10; i++) {
    randomImageValueArray.push(Math.floor(Math.random() * 200))
}

//crate div element on contentArea and equal numberId,randomImageValueArray i
//everytime end the /random/$numberId get the random image
imageGet = (numberId) => {
    for (let i = 1; i < 10; i++) {
        numberId = randomImageValueArray[i]
        contentArea.innerHTML += `
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 m-2"><img class="img-fluid" src="https://source.unsplash.com/random/300x400?${numberId}"></div>`
    }
}

//imageGet func. running after 1000ms
const myTimeOut = setTimeout(imageGet(), 1000)


