/**
 * Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 -
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post nel nostro feed, (rimuovendo il post di prova dall'html).
Milestone 2 -
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
 */

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const likedPostsArray = [];

function addStructure(postData) {
    return ` <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postData.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postData.author.name}</div>
                <div class="post-meta__time">${new Date(postData.created).toLocaleDateString('it-It')}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">"${postData.content}"</div>
    <div class="post__image">
        <img src="${postData.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="${postData.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${postData.id}" class="js-likes-counter">${postData.likes}</b> persone
            </div>
        </div> 
    </div>            
</div> `
}



function listenToClick(collection) {
    for (let button of collection) {
        button.addEventListener('click', () => {
            const postId = button.dataset.postid;
            const likeCounter = document.getElementById(`like-counter-${postId}`);
            const likedPostIndex = likedPostsArray.findIndex(id => id === postId);

            if (!likedPostsArray.includes(postId)) {
                button.classList.add('like-button--liked')
                likeCounter.innerHTML++;
                likedPostsArray.push(postId);
            } else {
                likeCounter.innerHTML--;
                likedPostsArray.splice(likedPostIndex, 1)
                button.classList.remove('like-button--liked')
            };
        });
    };
};

const container = document.getElementById('container');

posts.forEach((post) => {
    container.innerHTML += addStructure(post);
});

const collection = document.getElementsByClassName('like-button');

listenToClick(collection);







