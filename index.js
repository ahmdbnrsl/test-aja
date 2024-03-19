const express = require('express');
const app = express();
const port = 3000;

// LINK TIKTOK NYA
const { DownloadTiktok } = require('./SocialDownloader/tiktok');

app.get('/', (req, res) => {
  console.log('BERHASIL');
  res.send("Hello World");
});

app.get('/api/download/tiktok/:url*', async (req, res) => {
  const VideoURL = req.params.url + req.params[0];
  
  try {
    const DownloadVideoResult = await DownloadTiktok(VideoURL);
    res.status(200).json({ success: true, message: DownloadVideoResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Gagal Mengunduh Video:(' });
  }
});

app.listen(port, () => {
  console.log(`SERVER BERJALAN DI PORT ${port}`);
});
