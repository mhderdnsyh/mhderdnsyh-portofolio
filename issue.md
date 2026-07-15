# 📝 Issue: Penambahan Gambar (Assets) & Tautan Kredensial dari LinkedIn

**Deskripsi:**
Portofolio saat ini masih menggunakan ikon bawaan dan elemen dekoratif (*gradient boxes*) untuk merepresentasikan riwayat kerja, pendidikan, sertifikasi, dan proyek. Tujuan dari *issue* ini adalah untuk memperbarui komponen-komponen tersebut agar menampilkan **gambar/logo asli** serta menyisipkan **tautan kredensial** (Credentials URL) yang bersumber dari LinkedIn pemilik.

**Tujuan:**
Dokumen ini adalah panduan instruksi (planning) bagi Junior Programmer atau AI Assistant untuk memperbarui antarmuka (UI) agar mendukung gambar eksternal/lokal dan tautan kredensial.

---

## 📄 Data yang Dibutuhkan

Programmer perlu mengumpulkan URL Gambar atau mengunduh gambar-gambar berikut dari LinkedIn:
1. **Experience (Pengalaman Kerja):** Logo perusahaan (PT. Mitra Adiperkasa Tbk / Sports Station / Puma, Lab Inkubator UIN, BPS, KPU).
2. **Education (Pendidikan):** Logo universitas (UIN Suska Riau).
3. **Licenses & Certifications (Sertifikasi):** Logo penerbit (Udemy, Oracle, Sololearn, Dibimbing.id) beserta *Credential URL* masing-masing sertifikat.
4. **Projects (Proyek):** Gambar/Screenshot antarmuka (*thumbnail*) dari proyek-proyek yang ada.

---

## 🛠️ Tahapan Implementasi

Berikut adalah langkah-langkah yang harus dilakukan untuk menerapkan pembaruan ini:

### Tahap 1: Persiapan Aset Gambar
*Pilihan A (Disarankan)*: Unduh semua logo dan screenshot proyek dari LinkedIn, lalu simpan ke dalam folder `public/images/` di dalam proyek ini (misal: `public/images/map-logo.png`).
*Pilihan B*: Gunakan URL gambar eksternal secara langsung (pastikan URL bersifat publik dan tidak kedaluwarsa). Jika menggunakan Next.js `<Image>`, tambahkan domain LinkedIn di `next.config.js`.

### Tahap 2: Pembaruan Komponen `About.tsx` (Experience, Education, Certifications)
1. **Buka file** `src/components/sections/About.tsx`.
2. **Modifikasi Array Data:**
   - Pada array `experiences`, tambahkan *property* baru `logo: "/images/nama-logo.png"` (atau URL eksternal) pada setiap objek.
   - Pada array `education`, tambahkan *property* `logo: "..."`.
   - Pada array `certifications`, tambahkan *property* `logo: "..."` dan `credentialUrl: "https://..."`.
3. **Modifikasi Antarmuka (UI):**
   - Cari bagian kode yang merender (melakukan `.map`) daftar *Experience*. Tambahkan tag `<img>` atau Next.js `<Image>` di sebelah kiri nama *role* atau perusahaan untuk menampilkan logo tersebut. Sesuaikan ukuran logo (misal: `w-12 h-12 rounded-md object-contain`).
   - Lakukan hal yang sama untuk bagian *Education* dan *Certifications*.
   - Pada *Certifications*, bungkus judul atau buat tombol khusus "Show Credential" menggunakan *tag* `<a>` yang mengarah ke `credentialUrl` dengan `target="_blank"`.

### Tahap 3: Pembaruan Komponen Proyek (`Projects.tsx` & `ProjectCard.tsx`)
1. **Buka file** `src/components/sections/Projects.tsx`.
2. Pada array `projectList`, ganti *property* `gradient` menjadi `imageUrl: "/images/nama-project.png"` (atau gunakan URL eksternal) untuk setiap proyek yang memiliki gambar di LinkedIn.
3. **Buka file** `src/components/ProjectCard.tsx`.
4. Tambahkan properti `imageUrl?: string` di dalam interface `ProjectCardProps`.
5. Pada bagian kode yang saat ini menampilkan kotak gradien dekoratif (baris kode `<div className={\`h-48 w-full bg-gradient-to-br \${gradient} ...\`} >`), ubah kondisinya:
   - Jika `imageUrl` ada, tampilkan `<img src={imageUrl} alt={title} className="w-full h-full object-cover" />`.
   - Jika `imageUrl` kosong, tetap gunakan gaya gradien dekoratif sebagai *fallback*.

### Tahap 4: Verifikasi & Styling
1. Jalankan `npm run dev`.
2. Pastikan semua gambar berhasil dimuat tanpa *error* 404.
3. Cek responsivitas ukuran logo dan *thumbnail* gambar di HP dan Desktop agar tidak pecah atau menutupi teks.
4. Klik tombol/link *credential* untuk memastikan tautan mengarah ke halaman LinkedIn/penyedia sertifikat yang benar.
