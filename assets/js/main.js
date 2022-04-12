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
        authorName: 'Ugo',
        authorImg: 'https://picsum.photos/200',
        date: '01-09-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 30
    },
    {
        id: 2,
        authorName: 'Rosa',
        authorImg: 'https://picsum.photos/200',
        date: '06-23-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 25
    },
    {
        id: 3,
        authorName: 'Mario',
        authorImg: 'https://picsum.photos/200',
        date: '11-13-2019',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 63
    },
    {
        id: 4,
        authorName: 'Sara',
        authorImg: 'https://picsum.photos/200',
        date: '08-15-2020',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 81
    },
    {
        id: 5,
        authorName: 'Rita',
        authorImg: 'https://picsum.photos/200',
        date: '12-24-2020',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 30
    },
    {
        id: 6,
        authorName: 'Roberto',
        authorImg: 'https://picsum.photos/200',
        date: '07-30-2021',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 26
    },
    {
        id: 7,
        authorName: 'Valeria',
        authorImg: 'https://picsum.photos/200',
        date: '07-31-2021',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 33
    },
    {
        id: 8,
        authorName: 'Gianni',
        authorImg: 'https://picsum.photos/200',
        date: '01-09-2022',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: '',
        numberLikes: 13
    },
    {
        id: 9,
        authorName: 'Sandro',
        authorImg: 'https://picsum.photos/200',
        date: '10-03-2022',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero neque laboriosam culpa ipsum animi illum impedit consequatur quaerat deleniti.',
        postImg: 'https://picsum.photos/480/250',
        numberLikes: 54
    },
    {
        id: 10,
        authorName: 'Marisa',
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
    listPosts.forEach(post => {
        domElement.innerHTML += `
        <div id="${post.id}" class="col mb_1">
        <div class="post">
            <div class="author_info">
                <img src="${post.authorImg}" alt="">
                <!-- /.author Img  -->
                <div class="author_name">
                    <h4>${post.authorName}</h4>
                    <p>${post.date}</p>
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
                    <button class="btn_like">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>Mi Piace</span>
                    </button>
                </div>
                <!-- /.col -->
                <div class="col_50">
                    <p>Piace a <span>${post.numberLikes}</span> persone</p>
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
const btnLikeElement = document.querySelector('.btn_like');

//aggiungo evento al click
btnLikeElement.addEventListener('click', function() {
    btnLikeElement.classList.toggle('text_blue');
    
});
