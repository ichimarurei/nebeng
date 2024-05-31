# Fitur (Feature)

Struktur folder ini bertujuan untuk mengorganisir fitur-fitur aplikasi ke dalam lingkup tertentu (scope), untuk memungkinkan pemisahan yang jelas antara bagian-bagian utama dari aplikasi Anda.

## Struktur Folder:

```sh
.
└── src/
    └── [lingkup] /
        └── [fitur]
```

## Penjelasan:

- **Lingkup (Scope)**: Direktori ini mencakup kumpulan fitur yang terkait atau berhubungan secara konseptual dalam aplikasi Anda. Lingkup ini membantu dalam mengelompokkan fitur-fitur yang memiliki keterkaitan fungsional atau logis yang tinggi. Misalnya, dalam aplikasi manajemen pengguna, "Pengguna" dapat menjadi lingkup utama yang mengelola semua fitur yang terkait dengan pengguna.

- **Fitur (Feature)**: Setiap direktori fitur berada di bawah direktori lingkup dan mencakup implementasi dari fitur tertentu dalam aplikasi Anda. Dengan cara ini, setiap fitur memiliki ruang kerjanya sendiri dan terisolasi dari fitur lainnya, memungkinkan pengembangan dan pemeliharaan yang lebih mudah. Contohnya, dalam lingkup "Pengguna", Anda mungkin memiliki fitur seperti "Manajemen Pengguna" dan "Peran".

Dengan struktur folder ini, setiap fitur dapat dikembangkan secara independen dan diisolasi dengan baik, memfasilitasi pengembangan modular dan pengujian yang lebih efisien. Selain itu, struktur ini memungkinkan untuk penskalaan yang lebih baik karena memungkinkan penambahan fitur baru tanpa mengganggu atau merusak bagian-bagian yang sudah ada dalam aplikasi Anda.


## Contoh:

```sh
.
└── src/
    └── user/
        ├── management/
        │   ├── services
        │   ├── dto
        │   └── ...
        └── role/
            ├── services
            ├── dto
            └── ...
```

Dalam contoh di atas, "User" adalah lingkup utama, dengan "Manajemen Pengguna" dan "Peran" sebagai fitur-fitur di bawahnya. Setiap fitur memiliki direktori sendiri yang berisi logika bisnis, pengendali, layanan, dan DTO yang terkait dengannya. Hal ini memungkinkan pengembangan dan pemeliharaan yang terpisah antara fitur-fitur tersebut, meningkatkan kejelasan dan keterbacaan kode.