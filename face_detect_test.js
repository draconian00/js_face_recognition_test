const fr = require('face-recognition');
const detector = fr.FaceDetector();
const freeze = fr.hitEnterToContinue;

const origin_img = fr.loadImage('./images/face2.jpg');

const win = new fr.ImageWindow();
// display image
win.setImage(origin_img);

const faceRectangles = detector.locateFaces(origin_img);
const faceImages = detector.detectFaces(origin_img);

win.addOverlay(faceRectangles[0].rect);
const win2 = new fr.ImageWindow();
win2.setImage(faceImages[0]);

freeze();
