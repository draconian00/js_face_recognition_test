const fr = require('face-recognition');
const detector = fr.FaceDetector();
const freeze = fr.hitEnterToContinue;

const origin_img = fr.loadImage('./images/faces8.jpg');

const win = new fr.ImageWindow();
win.setImage(origin_img);

const faceRectangles = detector.locateFaces(origin_img);

if (faceRectangles.length === 0) {
  console.log(`there's no detected faces`);
} else {
  for (i=0; i<faceRectangles.length; i++) {
    win.addOverlay(faceRectangles[i].rect);
  }
}
freeze();
