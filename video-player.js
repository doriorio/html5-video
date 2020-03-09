var player = videojs('videoPlayer', {
    autoplay: 'muted',
    controls: true,
    loop: true,
    poster: "https://picsum.photos/800/450",
    fluid: true,
    aspectRatio: '4:3',
    playbackRates: [0.5, 1, 1.5, 3]
});