export const getPreLoadImage = (url, callback) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      if (callback) {
        callback(img)
      } else {
        resolve(img)
      }
      return;
    }
    img.onload = () => {
      if (callback) {
        callback(img)
      } else {
        resolve(img)
      }
    }
  })
}

