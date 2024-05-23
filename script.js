const musicPlayer = document.querySelector('.music-player');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const playlistList = document.querySelector('#playlist-list');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const skipButton = document.querySelector('#skip-button');
const volumeControl = document.querySelector('#volume-control');
const songTitle = document.querySelector('#song-title');
const songArtist = document.querySelector('#song-artist');

let playlist = [];
let currentSongIndex = 0;

searchButton.addEventListener('click', searchMusic);
playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
skipButton.addEventListener('click', skipMusic);
volumeControl.addEventListener('input', adjustVolume);

function searchMusic() {
  const searchTerm = searchInput.value.trim();
  // make API call to search for music
  // for demo purposes, just add some sample music to the playlist
  playlist = [
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    { title: 'Song 3', artist: 'Artist 3' },
    { title: 'Song 4', artist: 'Artist 4' }

  ];
  renderPlaylist();
}

function renderPlaylist() {
  playlistList.innerHTML = '';
  playlist.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${song.title} - ${song.artist}`;
    listItem.addEventListener('click', () => {
      currentSongIndex = index;
      playMusic();
    });
    playlistList.appendChild(listItem);
 });
}


// Add an event listener to the play button
playButton.addEventListener('click', () => {
  playSong(playlist[currentSongIndex]);
});
function playMusic(song) {
  const currentSong = playlist[currentSongIndex];
  songTitle.textContent = currentSong.title;
  songArtist.textContent = currentSong.artist;
  // for demo purposes, just play some random audio
  // for a real implementation, you would need to load the actual audio files
  const audio = new Audio(`song/${song.title}.mp3`);
  audio.play(); }
// Add an event listener to the play button
playButton.addEventListener('click', () => {
  playMusic(playlist[currentSongIndex]);
});

function pauseMusic(song) {
  // pause the currently playing audio
  // for a real implementation, you would need to access the actual audio
  // currently playing and call its pause() method

  audio.pause();
}

function skipMusic(song) {
  currentSongIndex++;
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
    audio.pause();
  playNextSong.play();
  }
  //audio.play();
}

function adjustVolume() {
  // for a real implementation, you would need to adjust the volume
  // of the actual audio currently playing
}




// Array of songs
const songs = [
  { title: 'song1', artist: 'Artist 1' },
  { title: 'song2', artist: 'Artist 2' },
  { title: 'song3', artist: 'Artist 3' },
  { title: 'song4', artist: 'Artist 4' },
  { title: 'song5', artist: 'Artist 5' }
]
let audio;

// Function to play a song
function playSong(song) {
  // Code to play the song goes here
 audio = new Audio(`song/${song.title}.mp3`);
  audio.play();
 
}

// Function to play the next song
function playNextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  playSong(songs[currentSongIndex]);
}

// Add an event listener to the play button
playButton.addEventListener('click', () => {
  playSong(songs[currentSongIndex]);
});

// Add an event listener to the next button
skipButton.addEventListener('click', () => {
  playNextSong.play()
});