# IBB Tech Istanbul - DevOps Atölyesi Projesi

Bu repositori, **IBB Tech Istanbul** tarafından düzenlenen **DevOps Atöryesi** kapsamında oluşturulmuş bir başlangıç projesidir. Proje, basit bir Python Flask uygulamasının Docker ile konteyner haline getirilmesi adımlarını içermektedir.

## 🚀 Projenin Amacı

Bu projenin temel amacı, DevOps'un temel kavramlarından olan "konteynerleştirme" (containerization) pratiğini basit ve anlaşılır bir örnekle göstermektir. Katılımcıların, bir web uygulamasının bağımlılıklarıyla birlikte nasıl paketlendiğini ve taşınabilir bir hale getirildiğini anlamaları hedeflenmektedir.

Bu proje, aşağıdaki gibi CI/CD (Sürekli Entegrasyon/Sürekli Dağıtım) senaryoları için bir başlangıç noktası olarak kullanılabilir:
* Koda yapılan her `push` işleminden sonra otomatik olarak Docker imajı oluşturma.
* Oluşturulan imajı test etme.
* Testleri geçen imajı bir Container Registry'ye (Docker Hub, AWS ECR, GCP GCR vb.) gönderme.
* Registry'deki imajı sunucu ortamına otomatik olarak dağıtma.

## 🛠️ Kullanılan Teknolojiler

* **Uygulama:** Python 3
* **Web Framework:** Flask
* **Konteynerleştirme:** Docker

## 📦 Proje Dosyaları

* **`app.py`**: "Hello World" mesajı döndüren basit bir Flask web sunucusu.
* **`requirements.txt`**: Projenin çalışması için gereken Python kütüphanelerini (sadece `Flask`) içerir.
* **`Dockerfile`**: Uygulamanın Docker imajını oluşturmak için gerekli adımları içeren komut dosyasıdır.

## ⚙️ Yerelde Çalıştırma

### 1. Docker ile Çalıştırma (Tavsiye Edilen)

Projeyi Docker kullanarak hızlıca ayağa kaldırabilirsiniz.

a. **Docker imajını oluşturun:**
```bash
docker build -t ibb-devops-app .

b. Oluşturulan imajdan bir konteyner başlatın:
Bash

docker run -p 5000:5000 ibb-devops-app

Uygulama artık http://localhost:5000 adresinde çalışıyor olacaktır.

2. Manuel Kurulum

a. Repository'yi klonlayın:
Bash

git clone [https://github.com/asametduran/ibb-devops.git](https://github.com/asametduran/ibb-devops.git)
cd ibb-devops

b. Python bağımlılıklarını yükleyin:
Bash

pip install -r requirements.txt

c. Uygulamayı başlatın:
Bash

python app.py

Uygulama http://127.0.0.1:5000 adresinde çalışmaya başlayacaktır.

📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.
