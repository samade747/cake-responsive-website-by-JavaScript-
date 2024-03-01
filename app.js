let carddisplay = [
    { id: '766',
      cardtitle: 'Engagement cake',
      cardtext: 'Engagement cake',
      image: "./images/cake-1.jpg"
      
    }, 
        
    { id: '367',
      cardtitle: 'Rosette Cake',
      cardtext: 'cake with rose',
      image: "./images/cake2.jpeg"
    },

    { id: '03',
      cardtitle: 'Nikah cake designs',
      cardtext: 'Nikah cake designs',
      image: "./images/cake3.jpg"
    },

    { id: '09',
    cardtitle: '',
    cardtext: '',
    image: "./images/cake4.jpg"
    },



    { id: '04',
    cardtitle: 'Gifts for adventurers',
    cardtext: 'Explore sports and outdoor gifts',
    image: "./images/cardSection-bag4.jpg"
    },


    { id: '05',
    cardtitle: 'New fall styles under $50',
    cardtext: 'See women New Arrivals Under $50',
    image: "./images/cardSection-bag5.jpg"
    },

    { id: '06',
    cardtitle: 'A lighter way to hydrate by Stanley',
    cardtext: 'shop the early lunch',
    image: "./images/cardSection-bag6.jpg"
    },

    { id: '08',
    cardtitle: 'Gifts for her and more',
    cardtext: 'Explore the Fashion Gift Guide',
    image: "./images/cardSection-bag8.jpg"
    },
];




// function carddisplayshow(cardData){
//     let cardElement = document.createElement('div');
//     cardElement.setAttribute('class', 'container cardimage');
//     let cardElement1 = document.createElement('div');
//     cardElement1.setAttribute('class', 'row');
//     let cardElement2 = document.createElement('div');
//     cardElement2.setAttribute('class','col-4');

//     cardElement.innerHTML = `
//         <div class="card w-75 shadow-lg p-2 mb-2 bg-body-tertiary">
//             <div class="card-body">
//                 <h5 class="card-title">${cardData.cardtitle}</h5>
//                 <img src="${cardData.image}" class="card-img-bottom w-100" alt="${cardData.cardtitle}">
//             </div>
//             <p class="card-text">${cardData.cardtext}</p>
//         </div>
//     `;
//      cardElement;
// }

function carddisplayshow() {
    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'row');

    carddisplay.forEach(cardData => {
        let cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'col-lg-3 col-md-3 col-sm-4');
        // cardElement.classList.add('class', 'col-sm-6');
        // cardElement.classList.add('class', 'w-75');

        cardElement.innerHTML = `
            <div class="card   p-2 mb-2 ">
                <div class=" ">
                    <h5 class="card-title">${cardData.cardtitle}</h5>
                    <img src="${cardData.image}" class="card-img-bottom " alt="${cardData.cardtitle}">
                </div>
                <p class="card-text">${cardData.cardtext}</p>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });

    return cardContainer;
}


let cardSection = document.querySelector('.cardSection');
cardSection.appendChild(carddisplayshow());









