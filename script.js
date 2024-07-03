const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'path/to/song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'path/to/song2.mp3'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'path/to/song3.mp3'
    }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = '⏸';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = '⏯';
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

loadSong(songs[songIndex]);
