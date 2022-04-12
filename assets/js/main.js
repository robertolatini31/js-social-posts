// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.

// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder
// ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// creo un array di oggetti per i post
const posts = [
    {
        id: 1,
        liked: false,
        authorName: 'Ugo',
        authorSurname: 'Rossi',
        authorImg: '',
        date: '01-09-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 30
    },
    {
        id: 2,
        liked: false,
        authorName: 'Rosa',
        authorSurname: 'Gildi',
        authorImg: 'https://picsum.photos/200',
        date: '06-23-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 25
    },
    {
        id: 3,
        liked: false,
        authorName: 'Mario',
        authorSurname: 'Brini',
        authorImg: 'https://picsum.photos/200',
        date: '11-13-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 63
    },
    {
        id: 4,
        liked: false,
        authorName: 'Sara',
        authorSurname: 'Sorrisi',
        authorImg: 'https://picsum.photos/200',
        date: '08-15-2020',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 81
    },
    {
        id: 5,
        liked: false,
        authorName: 'Rita',
        authorSurname: 'Massimi',
        authorImg: '',
        date: '12-24-2020',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 30
    },
    {
        id: 6,
        liked: false,
        authorName: 'Roberto',
        authorSurname: 'Latini',
        authorImg: 'https://picsum.photos/200',
        date: '07-30-2021',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 26
    },
    {
        id: 7,
        liked: false,
        authorName: 'Valeria',
        authorSurname: 'Sozzi',
        authorImg: 'https://picsum.photos/200',
        date: '07-31-2021',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 33
    },
    {
        id: 8,
        liked: false,
        authorName: 'Gianni',
        authorSurname: 'Marini',
        authorImg: 'https://picsum.photos/200',
        date: '01-09-2022',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 13
    },
    {
        id: 9,
        liked: false,
        authorName: 'Sandro',
        authorSurname: 'Lupo',
        authorImg: '',
        date: '10-03-2022',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 54
    },
    {
        id: 10,
        liked: false,
        authorName: 'Marisa',
        authorSurname: 'Rame',
        authorImg: 'https://picsum.photos/200',
        date: '12-25-2022',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 77
    }
];

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, 
// stampiamo i post del nostro feed.

// collego il punto della dom dove stampare
const domRowElement = document.getElementById('domelement');
// console.log(domRowElement);

// creo una funzione che inserendo una lista stampa i posts
/**
 * 
 * @param {array} listPosts 
 * @param {*} domElement 
 */
function postPrinter(listPosts, domElement) {
    domElement.innerHTML = '';
    listPosts.forEach(post => {
        domElement.innerHTML += `
        <div class="col mb_1">
        <div class="post">
            <div class="author_info">
                <img src="${post.authorImg}" alt="${post.authorName[0]} ${post.authorSurname[0]}">
                <!-- /.author Img  -->
                <div class="author_name">
                    <h4>${post.authorName} ${post.authorSurname}</h4>
                    <p>${dateFormatter(post.date)}</p>
                </div>
                <!-- /.author_name -->
    
            </div>
            <!-- /.author info-->
            <p class="author_text">
                ${post.postText}
            </p>
            <!-- /.author_text -->
            <div class="post_img">
                <img src="${post.postImg}" alt="">
            </div>
            <!-- /.post_img -->
            <div class="likes row">
                <div class="col_50">
                    <button id="${post.id}" class="btn_like">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>Mi Piace</span>
                    </button>
                </div>
                <!-- /.col -->
                <div class="col_50">
                    <p>Piace a <span class="counter_likes">${post.numberLikes}</span> persone</p>
                </div>
                <!-- /.col -->
    
            </div>
            <!-- /.likes -->
    
        </div>
        <!-- /.post -->
    </div>
    <!-- /.col --> 
        `;
    
    });
}

// chiamo la funzione per stampare in dom
postPrinter(posts, domRowElement);

// Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone
// e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// collego il btn_like
const btnLikeElements = document.querySelectorAll('.btn_like');
// collego i likes
const counterLikesElements = document.querySelectorAll('.counter_likes');
//aggiungo evento al click per ogni btn con un ciclo

for(let i = 0; i < btnLikeElements.length; i++){ // faccio un ciclo che scorre tutti i btn like
    btnLikeElements[i].addEventListener('click', function() { // aggiungo eventlistener ai btn
        btnLikeElements[i].classList.toggle('text_blue'); // aggiungo il colore blue al testo del btn
        // console.log(this.id); // controllo se id è connesso al btn
        posts.forEach(post => { // scorro la lista posts
            if(this.id == post.id && post.liked == false) { // se id btn e del post coincidono
                post.liked = true; // metto su vero la chiave liked
                ++post.numberLikes; // e incremento il valore dei likes
                // devo stampare il valore nuovo nella dom
                counterLikesElements[i].innerHTML = post.numberLikes;
            } else if (this.id == post.id && post.liked != false) {
                post.liked = false; // metto su vero la chiave liked
                --post.numberLikes; // e incremento il valore dei likes
                // devo stampare il valore nuovo nella dom
                counterLikesElements[i].innerHTML = post.numberLikes;
            }
        });        
    });
}


// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)

function dateFormatter(dateString) {
    const newDate = [];
    const dateArray = dateString.split('');
    newDate.push(dateArray[3]);
    newDate.push(dateArray[4]);
    newDate.push('/');
    newDate.push(dateArray[0]);
    newDate.push(dateArray[1]);
    newDate.push('/');
    for(let i = 6; i < 10; i++) {
        newDate.push(dateArray[i]);
    }
    return newDate.join('');
}


// Gestire l'assenza dell'immagine profilo con un elemento di fallback 
// che contiene le iniziali dell'utente (es. Luca Formicola > LF).

// Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

