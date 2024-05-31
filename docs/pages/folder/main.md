# Struktur Folder Utama

Struktur folder utama ini bertujuan untuk menyusun komponen utama dari aplikasi Anda, termasuk fitur-fitur dan library, memungkinkan organisasi yang jelas dan terstruktur dari kode Anda.

## Struktur Folder :
```sh
.
└── src/
    ├── lib
    ├── [features]
    └── ... ## Check NestJs Documentation
```

## Penjelasan:

- lib: Direktori ini digunakan untuk menyimpan library atau modul-modul umum yang dapat digunakan oleh berbagai bagian dari aplikasi Anda. Ini dapat berisi fungsi-fungsi utilitas, komponen UI yang dapat digunakan kembali, atau integrasi dengan layanan pihak ketiga yang sering digunakan.

- [fitur]: Direktori ini berisi fitur-fitur utama dari aplikasi Anda. Setiap fitur memiliki struktur yang terpisah di dalamnya, termasuk DTO (Data Transfer Object), model, layanan, resolver, dan modul. Ini memungkinkan untuk pemisahan yang jelas antara bagian-bagian dari aplikasi dan memudahkan pengembangan dan pemeliharaan.

Dengan struktur folder utama ini, Anda dapat mengorganisir kode Anda dengan baik dan memisahkan fungsionalitas sesuai dengan fitur-fitur utama dari aplikasi Anda. Hal ini memungkinkan untuk pengembangan yang terstruktur, pemeliharaan yang mudah, dan skalabilitas yang lebih baik seiring dengan pertumbuhan aplikasi Anda.