const drums = new Howl(
    {
        "src": [
          "./drums/drums.webm",
          "./drums/drums.mp3"
        ],
        "sprite": {
          "clap": [
            0,
            497.3922902494331
          ],
          "closed-hihat": [
            2000,
            889.5691609977323
          ],
          "crash": [
            4000,
            1958.0725623582769
          ],
          "kick": [
            7000,
            879.3877551020408
          ],
          "open-hihat": [
            9000,
            870.4761904761913
          ],
          "snare": [
            11000,
            498.730158730158
          ]
        }
      }
);

const drumkit = document.querySelector('.drumkit');
  function playDrum(event) {
    if (event.target.classList.contains('pad')) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      drums.play(soundToPlay);
    }
  }


  drumkit.addEventListener('click', playDrum);
