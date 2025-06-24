# 1. Adım: Temel imajı seçiyoruz.
# Uygulamamızın çalışması için Node.js'in 18. versiyonu gerekiyor diyoruz.
# Alpine, çok küçük ve hızlı bir Linux versiyonudur.
FROM node:18-alpine

# 2. Adım: Uygulama dosyalarının imajın içinde duracağı bir klasör oluşturuyoruz.
WORKDIR /app

# 3. Adım: package.json dosyasını kopyalıyoruz.
# Bu, her seferinde tüm paketleri tekrar indirmemek için bir optimizasyon hilesidir.
COPY package*.json ./

# 4. Adım: Gerekli tüm paketleri (express, axios, jest) kuruyoruz.
# Bu, senin terminalde `npm install` yapmanla aynı işi yapar.
RUN npm install

# 5. Adım: Projedeki geri kalan tüm dosyaları (.js, vb.) kopyalıyoruz.
COPY . .

# 6. Adım: Dış dünyanın bu pakete hangi kapıdan (port) ulaşacağını söylüyoruz.
EXPOSE 8080

# 7. Adım: Bu paket çalıştırıldığında hangi komutun çalışacağını belirtiyoruz.
# Yani `node index.js` komutuyla uygulamamızı başlatıyoruz.
CMD [ "node", "index.js" ]