const express = require('express');
const axios = require('axios'); // Bu, internetten veri çekmemizi sağlayan paket
const app = express();
const PORT = 8080; // Uygulamamızın çalışacağı kapı (port)

// Şakaları çekeceğimiz internet adresi
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

// Kullanıcı ana sayfaya (/) gelirse ona bir yönlendirme mesajı gösterelim
app.get('/', (req, res) => {
  res.send('Rastgele bir şaka görmek için adres çubuğuna /saka ekleyerek sayfayı ziyaret edin.');
});

// Kullanıcı /saka adresine gelirse...
app.get('/saka', async (req, res) => {
  try {
    // API'ye istek at ve cevabı bekle
    const response = await axios.get(JOKE_API_URL);
    const saka = response.data; // Gelen cevabın içindeki şaka verisini al

    // Gelen şakayı ekrana HTML olarak yazdır
    res.send(`
      <h1>${saka.setup}</h1>
      <p>... ${saka.punchline}</p>
    `);

  } catch (error) {
    // Eğer bir sorun çıkarsa (mesela internet giderse veya API çalışmazsa) hata ver
    console.error('Şaka alınırken bir hata oluştu:', error.message);
    res.status(500).send('Üzgünüm, şaka makinesi şu an bozuk. Lütfen daha sonra tekrar deneyin!');
  }
});

// Sunucuyu başlat ve dinlemeye başla
const server = app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

// Bu satır, daha sonra yazacağımız otomatik testlerin çalışabilmesi için gerekli
module.exports = server;