# Feature

Dalam pengembangan aplikasi dengan Clean Architecture menggunakan NestJS, struktur folder yang terorganisir dengan baik adalah kunci untuk memelihara kode yang mudah dipelihara dan dimengerti. Berikut adalah Naming Conventions yang direkomendasikan untuk folder dalam struktur fitur (feature) dalam aplikasi NestJS:

## Nama Scope:

Nama direktori untuk scope harus mencerminkan area utama atau domain dari fitur-fitur yang akan dikelompokkan di dalamnya. Scope mengelompokkan fitur-fitur yang memiliki keterkaitan fungsional atau logis yang tinggi.
Format penamaan direktori: ```[nama-scope]```
Contoh: ```user, product, order```

## Nama Fitur (Feature):

Setiap direktori fitur berada di bawah direktori scope dan mencakup implementasi dari fitur tertentu dalam aplikasi Anda.
Format penamaan direktori: ```[nama-fitur]```
Contoh: ```management, profile, billing```

Dengan mengikuti konvensi penamaan ini, pengembang dapat dengan mudah mengidentifikasi dan menavigasi fitur-fitur dalam proyek NestJS mereka. Ini membantu dalam menjaga struktur proyek yang terorganisir, memudahkan pemeliharaan, dan memfasilitasi kolaborasi tim yang efisien dalam pengembangan aplikasi.






