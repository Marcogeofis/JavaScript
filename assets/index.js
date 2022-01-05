import MediaPlayer from "./MediaPlayers.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new AutoPlay()] });

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
  