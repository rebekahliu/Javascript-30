// Get Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// write functions
function togglePlay() {
  if (video.paused) {
    video.play()
  } else {
    video.pause();
  };
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
  video[this.name] = parseFloat(this.value);
}

function handleProgress() {
  const percent = ( video.currentTime / video.duration ) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// progress and timeupdate will both update timecode
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach( button => button.addEventListener('click', skip) );
ranges.forEach( range => range.addEventListener('change', updateRange) );
ranges.forEach( range => range.addEventListener('mousemove', updateRange) );

