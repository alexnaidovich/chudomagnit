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