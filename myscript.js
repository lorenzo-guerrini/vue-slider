let app = new Vue({
    el: "#myApp",
    data: {
        imagesArray: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
        selected: 0
    },
    methods: {
        isSelected: function(index) {
            return (index == this.selected)?"selected":"unselected";
        }
    }
})

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Imposta immagine, titolo e descrizione iniziali a sx
document.querySelector(".showing-image").style.backgroundImage = "url(" + items[0] + ")";

document.querySelector(".showing-image-title").innerHTML = title[0];

document.querySelector(".showing-image-text").innerHTML = text[0];

//Contatore item
let currentItemIndex = 0;

// Funzionamento arrow up
document.querySelector(".arrow.up").addEventListener("click", function () {

    //Gestisce l'item da deselezionare a dx
    const oldItem = document.querySelector(".selector-image-" + currentItemIndex);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    //Gestisce il contatore diminuendolo
    currentItemIndex--;
    if (currentItemIndex < 0) {
        currentItemIndex = items.length - 1;
    }

    //Gestisce l'item da selezionare a dx
    const newItem = document.querySelector(".selector-image-" + currentItemIndex);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    //Gestisce il comportamento degli elementi a sx
    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItemIndex] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItemIndex];

    document.querySelector(".showing-image-text").innerHTML = text[currentItemIndex];
});

// Funzionamento arrow down
document.querySelector(".arrow.down").addEventListener("click", function () {

    //Gestisce l'item da deselezionare a dx
    const oldItem = document.querySelector(".selector-image-" + currentItemIndex);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    //Gestisce il contatore aumentandolo
    currentItemIndex++;
    if (currentItemIndex > items.length - 1) {
        currentItemIndex = 0;
    }

    //Gestisce l'item da selezionare a dx
    const newItem = document.querySelector(".selector-image-" + currentItemIndex);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    //Gestisce il comportamento degli elementi a sx
    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItemIndex] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItemIndex];

    document.querySelector(".showing-image-text").innerHTML = text[currentItemIndex];
});