let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);

let container = document.querySelector(`#album`)
  let album = albums[i]
    container.innerHTML = `
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                  <img src="${album.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-secondary">Плейлист опубликован в ${album.year}</small></p>
                  </div>
                </div>
              </div>
            </div> `;
let container1 = document.querySelector(`#menu`);
let tracks = album.tracks; 
for (let i = 0; i < tracks.length ; i++) {
  let track = tracks[i];
  container1.innerHTML += `
  <li class="list-group-item text-light d-flex text-align-center">
  <img src="${track.img}" alt="" class="me-3" height="50px">
  <div>
    <div>
      ${track.sing}
    </div>
    <div class="text-secondary">${track.author}</div>
  </div>
  <div class="ms-auto">${track.time}</div>
</li>`;
 };

   