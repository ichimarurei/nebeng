
## Clean Architecture NestJs-GraphQL! (v1.0)

Sebelum membaca dokumentasi ini, pastikan **keilmuan** memahami `NestJs` sudah
mencukupi untuk memahami beberapa hal dasar dalam dokumentasi *NestJs*. Dikarenakan
dokumentasi clean-architecture tidak akan mencakup hal-hal dasar dalam penggunaan/pembangunan
aplikasi menggunakan `NestJs`.

- [Boiler Plate Basic](https://bitbucket.org/bridce/boiler-wcp-nest/src/main/?search_id=3380d10d-0973-4197-8594-a95aa73896f0)
- [Example Project](#a)
___

### Keilmuan minimal sebelum memulai

- **NestJs**: Penggunaan NestJs dalam pembangunan aplikasi.
- **GraphQL**: Penggunaan GraphQL dalam pembangunan aplikasi.
- **TypeScript**: Penggunaan TypeScript dalam pembangunan aplikasi.

___
### Garis Besar Struktur Folder

`Basic Folder Structure`
```sh
.
├── dist
├── node_modules
├── src/
│   ├── lib
│   ├── [features]/
│   │   ├── dto/
│   │   │   ├── input/
│   │   │   │   └── [sub-features].input.ts
│   │   │   ├── args/
│   │   │   │   └── [sub-features].args.ts
│   │   │   └── view/
│   │   │       └── [features].view.ts
│   │   ├── models/
│   │   │   └── [features].ts
│   │   ├── service/
│   │   │   └── [features].[sub-features].server.ts
│   │   ├── [features].module.ts
│   │   └── [features].resolver.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
└── package.json
```