// require ./thirdparty/bideo.js
// require ../../node_modules/smooth-scrollbar/dist/smooth-scrollbar.js

(function () {

    var bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector('#background-video'),
  
      // Container element
      container: document.querySelector('#video-container'),
  
      // Resize
      resize: true,
  
      // autoplay: false,
  
      isMobile: window.matchMedia('(max-width: 768px)').matches,
  
    //   playButton: document.querySelector('#play'),
    //   pauseButton: document.querySelector('#pause'),
  
      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        // {
        //   src: './assets/video/promo.mp4',
        //   type: 'video/mp4'
        // },
        // {
        //   src: 'night.webm',
        //   type: 'video/webm;codecs="vp8, vorbis"'
        // }
      ],
  
      // What to do once video loads (initial frame)
      onLoad: function () {
        // document.querySelector('#video_cover').style.display = 'none';
        console.log('video loaded');
      }
    });
}());


Scrollbar.init(document.querySelector('main'));

let windowTop;
window.addEventListener('wheel', e => {
    if (document.querySelector('div.scroll-content').style.transform) {
        windowTop = +(document.querySelector('div.scroll-content').style.transform.split(', ')[1].split('').filter(n => !isNaN(+n)).join(''));
        if (windowTop >= window.innerHeight - 111) {
            document.querySelector('header').classList.add('onsecond');
        } else {
            document.querySelector('header').classList.remove('onsecond');
        }
    }
});
