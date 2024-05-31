# Data Transfer Object (DTO)

Folder DTO adalah bagian penting dari struktur aplikasi yang mengatur objek transfer data (DTO) yang digunakan dalam aplikasi NestJS. Untuk memudahkan identifikasi dan pengelolaan, diperlukan konsistensi dalam penamaan file di dalam folder DTO. Berikut adalah aturan penamaan yang direkomendasikan untuk file dalam setiap subfolder DTO:

## Folder Input

Nama file harus menggambarkan sub-fitur yang terkait dengan DTO input.
Format penamaan file: ```[sub-feature].input.ts```
Contoh: ```create-user.input.ts```

## Folder Args

Nama file harus menggambarkan sub-fitur yang terkait dengan DTO args.
Format penamaan file: ```[sub-feature].args.ts```
Contoh: ```get-user.args.ts```

## Folder View:

Nama file harus menggambarkan fitur utama yang terkait dengan DTO view.
Karena folder view hanya memiliki satu file per fitur, maka nama file menggambarkan fitur utama itu sendiri.
Format penamaan file: ```[feature].view.ts```
Contoh: ```user.view.ts```

Dengan mengikuti konvensi penamaan ini, Anda dapat dengan mudah mengidentifikasi dan menavigasi berbagai file DTO dalam proyek NestJS Anda. Ini membantu dalam menjaga konsistensi dan kejelasan dalam struktur proyek, serta memfasilitasi kolaborasi antara anggota tim dalam pengembangan aplikasi.





