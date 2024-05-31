# Data Transfer Object (DTO)

DTO (Data Transfer Object) adalah bagian penting dalam struktur aliran data aplikasi Anda di NestJS saat bekerja dengan GraphQL. 
Organisasi yang baik dari DTO memastikan kejelasan dan kemudahan pemeliharaan dalam proyek Anda.
Dalam konteks GraphQL, DTO digunakan untuk mendefinisikan bentuk data yang masuk (input), data yang keluar (view), dan data yang dilewatkan sebagai argumen (args).

## Struktur Folder 

```sh
.
└── [fitur]/
    └── dto/
        ├── input
        ├── args
        └── view
```

## Penjelasan:

- **Input**: Direktori ini berisi DTO yang mendefinisikan bentuk data yang masuk. DTO Input umumnya sesuai dengan jenis input GraphQL. Objek-objek ini digunakan untuk memvalidasi dan membangun struktur data sebelum diproses oleh aplikasi.

- **Args**: Direktori ini berisi DTO yang digunakan untuk mendefinisikan argumen untuk kueri dan mutasi GraphQL. DTO Args menentukan parameter yang diharapkan oleh fungsi resolver GraphQL untuk menerima. Mereka membantu dalam mendefinisikan bentuk dan aturan validasi untuk argumen yang dilewatkan dalam kueri dan mutasi GraphQL.

- **View**: Direktori View berisi DTO yang mewakili struktur data yang keluar atau tipe model. DTO ini mendefinisikan bagaimana data dibentuk ketika dikembalikan dalam tanggapan GraphQL. Ini membantu dalam menstandarisasi bentuk data yang dikirim ke klien dan memastikan konsistensi dalam tanggapan.

Dalam struktur folder DTO, setiap fitur/modul dapat memiliki seperangkat Input, Args, dan View DTO sendiri. 
Pemisahan ini membantu dalam menjaga DTO terkait bersama dan mempromosikan pendekatan modular dalam pengembangan. 
Dengan mengorganisir DTO dengan cara ini, lebih mudah untuk menemukan dan mengelolanya, yang mengarah pada pemeliharaan dan skalabilitas kode yang lebih baik.

**Catatan**: Penting untuk memastikan bahwa DTO dijaga singkat dan difokuskan pada representasi struktur data. 
Mereka tidak boleh mengandung logika bisnis atau fungsionalitas khusus aplikasi lainnya. 
Menjaga DTO bersih dan hanya untuk tujuan transfer data sejalan dengan prinsip Clean Architecture dan membantu dalam membangun aplikasi yang kuat dan mudah dipelihara.





