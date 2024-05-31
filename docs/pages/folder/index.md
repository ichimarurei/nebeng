## Struktur Folder

Disarankan untuk dibaca sesuai urutan angka, dan harap memahami struktur dibawah sebelum melanjutkan.

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
