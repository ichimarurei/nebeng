# NestJs GraphQL Workflow

## Module:

- **Modul (Module)** adalah komponen utama dalam pengembangan aplikasi NestJS dengan GraphQL. Modul ini mengelola semua aspek yang terkait dengan fitur tertentu dalam aplikasi, termasuk resolver dan service yang terkait.


## Resolver:

- **Resolver** adalah komponen NestJS yang bertanggung jawab untuk menangani permintaan GraphQL dan mengembalikan data yang sesuai. Resolver berfungsi sebagai jembatan antara permintaan GraphQL dari klien dan logika bisnis di aplikasi.
Pada langkah ini, resolver dalam modul fitur dipanggil untuk menangani permintaan GraphQL yang masuk dari klien.

## Service:

**Service** adalah komponen NestJS yang mengimplementasikan logika bisnis dari fitur tertentu dalam aplikasi. Service digunakan oleh resolver untuk mengambil atau memanipulasi data yang diperlukan sebelum mengembalikannya ke klien.
Pada langkah ini, resolver dalam modul fitur memanggil service yang sesuai untuk memperoleh atau memproses data yang diperlukan untuk menjawab permintaan GraphQL.

## Model:

- **Model** adalah representasi struktur data dalam aplikasi, sering kali berupa kelas TypeScript. Model ini menggambarkan entitas atau objek dalam domain aplikasi Anda, seperti pengguna, produk, atau pesanan.
Pada langkah ini, model yang sesuai dengan data yang diperlukan oleh fitur tersebut diinject ke dalam service untuk membantu dalam memproses data yang diperlukan.

## DTO (Data Transfer Object):

- **DTO** adalah objek yang digunakan untuk mentransfer data antara komponen aplikasi, terutama antara service dan resolver. DTO berisi definisi input atau output data yang diperlukan untuk operasi tertentu.
Pada langkah ini, DTO digunakan oleh service untuk mendukung operasi-operasi yang diperlukan, seperti validasi input atau pemformatan output.
Dengan menggunakan workflow ini, aplikasi NestJS dengan GraphQL dapat dengan efisien menangani permintaan klien, memisahkan logika bisnis dari lapisan presentasi, dan memastikan kejelasan dan skalabilitas dalam pengembangan aplikasi.

![Nest Js Graph QL](assets/images/nestjs-graphql.png)