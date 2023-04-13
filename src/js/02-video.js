
import Player from "@vimeo/player";
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";



const onPlay = function(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)};

const throttledOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttledOnPlay);

    
const pausedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(pausedTime).then(function(seconds) {});

