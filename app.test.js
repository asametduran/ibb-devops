const request = require('supertest');
const app = require('./index.js'); // Test edeceğimiz uygulamayı (index.js) çağırıyoruz

// Ana sayfanın testimizi gruplayan blok
describe('Ana Sayfa Testi', () => {

  // Testin kendisi: "Ana sayfa (/) başarılı bir şekilde cevap vermeli"
  it('GET / isteği atıldığında doğru cevabı vermeli', async () => {
    const response = await request(app).get('/');

    // Beklentimiz 1: Gelen cevabın HTTP durum kodunun 200 (Yani "Başarılı") olması
    expect(response.statusCode).toBe(200);

    // Beklentimiz 2: Gelen sayfa içeriğinde "Rastgele bir şaka" yazısının geçmesi
    expect(response.text).toContain('Rastgele bir şaka');
  });

});

// Tüm testler bittikten sonra, uygulamanın (sunucunun) düzgün bir şekilde kapanmasını sağlar.
afterAll((done) => {
    app.close(done);
});