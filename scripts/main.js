// async function fetchJSON(file) {
//     const requestURL = file;
//     const request = new Request(requestURL);
//     const response = await fetch(request);
//     const data = await response.json();
//     return data;
// }

// (async () => {
//     const jsonData = await fetchJSON('datas.json');
//     console.log(jsonData);

//     // Access data in the object
//     console.log(jsonData.squadName);
//     console.log(jsonData.homeTown);
//     console.log(jsonData.members[0].name);
//     console.log(jsonData.members[1].powers[1]);
// })();



// let app = document.querySelector('#app')
// let users = document.querySelector('.users')
// let usersPics = document.querySelector('.users-pics')
// let usersDetails = document.querySelector('.user-details')
// let age = document.querySelector('.age')
// let contact = document.querySelector('.contact')
// let address = document.querySelector('.address')
// let usersPicsRdy = document.querySelectorAll('img')




// select.addEventListener('change', function() {
//     gallery.innerHTML =''
//    fetch(`http://shibe.online/api/shibes?count=${select.value}`)
//   .then(response => response.json())
//   .then(data => {
//     // console.log(data);
//     data.forEach(function(oneShiba) {
//         gallery.innerHTML += `<div class="img"><img src="${oneShiba}" alt=""></div>`
//     });
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })
// })

// fetch("scripts/datas.json")
//     .then(response => response.json())
//     .then(datas => {
//         console.log(datas);
//         datas.users.forEach(function(singleUser){
//             const img = document.createElement("img"); // Créer un nouvel élément image
//             img.classList.add("userImg"); // Ajouter la classe "userImg"
//             img.src = singleUser.image; // Définir la source de l'image
//             document.querySelector(".users-pics").appendChild(img); // Ajouter l'image à votre conteneur

//             // Ajouter un gestionnaire d'événements de clic à chaque image
//             img.addEventListener("click", function(){
//                 document.querySelector(".user-details").innerHTML = ``
//                 document.querySelector(".user-details").innerHTML = `<img src="${singleUser.image}">
//                 <h2> ${singleUser.name}</h2>
//                 <div>${singleUser.age} ans</div>`
//             });
//         });
//     })
//     .catch(error => {
//         console.log("Erreur lors de la récup des données :", error);
//     });

// fetch("scripts/datas.json")
// .then(response => response.json())
// .then(datas => {
//     console.log(datas);
//     datas.users.forEach(function(singleUser){
//         const userImg = `<img class="userImg" src="${singleUser.image}">`; // Créer une balise image en HTML
//         document.querySelector(".users-pics").innerHTML += userImg; // Ajouter l'image à votre conteneur

//         // Ajouter un gestionnaire d'événements de clic à chaque image
//         document.querySelectorAll(".userImg").forEach(img => {
//             img.addEventListener("click", function(){
//                 document.querySelector(".user-details").innerHTML = ``
//             document.querySelector(".user-details").innerHTML = `<img src="${singleUser.image}">
//             <h2> ${singleUser.name}</h2>
//             <div>${singleUser.age} ans</div>`
//             });
//         });
//     });
// })
// .catch(error => {
//     console.log("Erreur lors de la récup des données :", error);
// });

let userPic = document.querySelector(".users-pics")

fetch("scripts/datas.json")
    .then(response => response.json())
    .then(datas => {
        console.log(datas);
        datas.users.forEach(function(singleUser){
            let userImg = `<img class="userImg" data-userid="${singleUser.id-1}" src="${singleUser.image}">`
            userPic.innerHTML += userImg;
        })

        userPic.addEventListener( 'click', function(e) {
            if (e.target.classList.contains("userImg")) {
                document.querySelector(".user-details").innerHTML = 
                `
                <img src="${datas.users[e.target.getAttribute("data-userid")].image}">
                <h2> ${datas.users[e.target.getAttribute("data-userid")].name}</h2>
                <div>${datas.users[e.target.getAttribute("data-userid")].age} ans</div>
                `
            }
        })
    })
    .catch(error => {
        console.log("Erreur lors de la récup des données :", error);
});



// fetch("scripts/datas.json")
//     .then(response => response.json())
//     .then(singleUser => {
//       console.log(singleUser.users[0].image);singleUser.users.forEach((element) => {
//         // usersPics.innerHTML=""
//         usersPics.innerHTML +=  `<img src="${element.image}" >`
//         usersPicsRdy.forEach((img) => {
//             img.addEventListener('click', ()=> {    usersDetails.innerHTML = ""
//                 usersDetails.innerHTML += `<img src="${element.image}" >`
//             })
//         })

//         // usersPicsRdy = ""
//         // usersPicsRdy += `<img src="${element.image}" >`

//     });
     
//     })
//     .catch(error => {console.log("Erreur lors de la récup des données :", error);
//   })
// console.log(datas.users[0].image);


// button.addEventListener('click', function() {
//     wrapper.inerHTML =''
//    fetch(`https://api.giphy.com/v1/gifs/search?api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX&q=${gifName.value}&limit=${select.value}`)
//   .then(response => response.json())
//   .then(data => {
//     data.data.forEach(function(oneGif) {
//       wrapper.innerHTML += `<img src="${oneGif.images.downsized.url}" alt="">`
//     })
//     // data.data.forEach(function(singleData){
//     //   console.log('teest');
//     // console.log(data.data);
  
//     // });
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
//   })
//   })
  
  