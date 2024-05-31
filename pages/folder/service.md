# Service

Struktur folder service ini bertujuan untuk menyimpan logika bisnis terkait dengan fitur-fitur tertentu dalam aplikasi NestJs GraphQL, memungkinkan pemisahan yang jelas antara logika bisnis dan lapisan lainnya seperti model dan resolver.

## Struktur Folder Service:
```sh
.
└── [fitur]/
    └── service
```

## Penjelasan:

- **service** : Direktori ini berisi berbagai file atau modul yang mengimplementasikan logika bisnis terkait dengan fitur tertentu dalam aplikasi Anda. Setiap file atau modul service biasanya mengelola satu aspek dari fitur tersebut, seperti membuat, membaca, memperbarui, atau menghapus data terkait.

## Dalam contoh di bawah ini, Anda dapat melihat struktur folder service untuk fitur pengguna:
```sh
.
└── users/
    └── service/
        ├── user.create.service.ts
        └── user.get.service.ts
```