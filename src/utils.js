export const getPreLoadImage = (url, callback) => {
  const img = new Image();
  img.src = url;
  if (img.complete) {
    callback(img)
    return;
  }
  img.onload = () => {
    callback(img)
  }
}


