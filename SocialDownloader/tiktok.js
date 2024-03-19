const { TiktokDownloader } = require("@tobyg74/tiktok-api-dl");

function DownloadTiktok(url) {
  return new Promise((resolve, reject) => {
    TiktokDownloader(url, { version: "v2" })
      .then((result) => {
        console.log(result);
        const videoUrls = result.result.video; 
        const authorName = "Akuivan13"; // Your name as the author
        const hasil = { 
          message: "Video Berhasil Di Unduh!", 
          video_urls: videoUrls,
          author: {
            name: authorName
          }
        };
        resolve(hasil);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = { DownloadTiktok };
