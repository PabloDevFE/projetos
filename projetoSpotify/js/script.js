const songName = document.querySelector("#song-name");
const song = document.querySelector("#audio")
const play = document.querySelector("#play")


songName.innerText = 'Daas'

function playSong() {
    song.play();
}

play.addEventListener('click', playSong)