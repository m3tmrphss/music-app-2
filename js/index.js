let row = document.querySelector(`#row`);
for (let i = 0; i < albums.length; i++ ) {
    let album = albums[i];
    row.innerHTML += 
    `<div class="col cover">
    <a href="album.html?i=${i}" class="text-decoration-none">
        <div class="card" style="width: 18rem;">
        <img src="${album.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${album.title}</p>
            </div>
        </div>
    </a>
    </div>`;
}