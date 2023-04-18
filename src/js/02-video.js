import Vimeo from '@vimeo/player';
import _ from 'lodash';
const player = new Vimeo('vimeo-player');
player.on('timeupdate', function(data) {
    console.log('Час відтворення:', data.seconds);
});
function saveCurrentTime(currentTime) {
    localStorage.setItem('video-player-current-time', currentTime);
}
player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
});

const savedTime = localStorage.getItem('video-player-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime);
}
const saveTime = _.throttle(() => {
    localStorage.setItem('video-player-current-time', player.currentTime);
}, 1000);

player.on('timeupdate', () => {
    saveTime();
});
player.on('timeupdate', _.throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));