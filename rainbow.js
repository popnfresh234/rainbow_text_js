const RAINBOW_RGB = [255, 0, 0];

function nextColor() {
  if (RAINBOW_RGB[0] === 255 && RAINBOW_RGB[1] < 255 && RAINBOW_RGB[2] === 0) {
    RAINBOW_RGB[1]++;
  }
  if (RAINBOW_RGB[0] > 0 && RAINBOW_RGB[1] === 255 && RAINBOW_RGB[2] === 0) {
    RAINBOW_RGB[0]--;
  }
  if (RAINBOW_RGB[0] === 0 && RAINBOW_RGB[1] > 0 && RAINBOW_RGB[2] < 255) {
    RAINBOW_RGB[1]--;
    RAINBOW_RGB[2]++;
  }
  if (RAINBOW_RGB[0] < 255 && RAINBOW_RGB[1] === 0 && RAINBOW_RGB[2] > 0) {
    RAINBOW_RGB[0]++;
    RAINBOW_RGB[2]--;
  }
}

function doThing(i, ms) {
  i++;
  nextColor();
  document.getElementById('test').innerHTML = `<span style='font-size:200px;color: rgb(${RAINBOW_RGB[0]},${RAINBOW_RGB[1]},${RAINBOW_RGB[2]});'> This is a test message!</span>`;
  if (i < 10000) setTimeout(() => { doThing(i, ms); }, ms);
}

document.getElementById('thingButton').onclick = () => doThing(0, 5);

