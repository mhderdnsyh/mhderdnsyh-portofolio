# 🚀 Perencanaan Implementasi Portofolio Frontend

Dokumen ini berisi panduan teknis dan tahapan implementasi untuk mendevelop website portofolio. Panduan ini dirancang untuk dapat diikuti dengan mudah oleh Junior Programmer atau AI Assistant.

## 🛠️ Rekomendasi Tech Stack

Untuk proyek portofolio ini, sangat disarankan menggunakan kombinasi teknologi berikut:

1.  **Framework: Next.js (React)**
    *   **Alasan:** Next.js adalah framework React standar industri saat ini. Untuk sebuah portofolio, Next.js menawarkan fitur *Server-Side Rendering* (SSR) dan *Static Site Generation* (SSG) yang membuat website dimuat sangat cepat dan memiliki SEO (*Search Engine Optimization*) yang sangat optimal. Routing berbasis file (App Router) di Next.js juga sangat intuitif untuk diimplementasikan.
2.  **Styling: Tailwind CSS**
    *   **Alasan:** Tailwind CSS memungkinkan *styling* yang sangat cepat menggunakan *utility classes* langsung di dalam HTML/JSX. Teknologi ini sangat disukai oleh AI model dan programmer pemula karena strukturnya yang konsisten dan mengurangi kebutuhan untuk berpindah-pindah antara file CSS dan komponen. Tailwind juga sangat memudahkan pembuatan desain modern dan responsif.
3.  **Animasi: Framer Motion**
    *   **Alasan:** Website portofolio yang terkesan "premium" membutuhkan interaksi dan animasi yang halus (*micro-animations*, efek saat di-*scroll*). Framer Motion sangat mudah diintegrasikan dengan React dan memberikan hasil animasi yang profesional dengan penulisan kode yang minim.
4.  **Icons: Lucide React / React Icons**
    *   **Alasan:** Koleksi ikon yang modern, ringan, dan sangat mudah dikustomisasi (ukuran dan warna) langsung melalui props React.

## 📋 Tahapan Implementasi

Berikut adalah langkah-langkah sistematis yang harus dikerjakan secara berurutan:

### Tahap 1: Inisialisasi Proyek (Setup)
1.  Buka terminal dan jalankan perintah: `npx create-next-app@latest .` (di dalam folder root proyek).
2.  Pilih konfigurasi default yang direkomendasikan (Gunakan TypeScript, Tailwind CSS, App Router, dan ESLint).
3.  Jalankan server lokal (`npm run dev`) untuk memastikan proyek berhasil diinisialisasi dan berjalan tanpa error.
4.  Install Framer Motion: `npm install framer-motion`.
5.  Install ikon: `npm install lucide-react`.

### Tahap 2: Setup Konfigurasi Dasar & Desain Sistem
1.  Bersihkan kode *boilerplate* bawaan di `app/page.tsx` dan hapus styling yang tidak perlu di `app/globals.css`.
2.  Tentukan skema warna (*color palette*) dan font yang akan digunakan. Konfigurasikan kustomisasi warna ini di dalam file `tailwind.config.ts`.
    *   *Saran desain: Gunakan kombinasi warna yang modern, misalnya tema gelap (dark mode) dengan aksen warna cerah (neon/vibrant) untuk memberikan kesan elegan dan profesional.*
3.  Tambahkan font modern dari Google Fonts (misalnya: Inter, Roboto, atau Outfit) melalui modul `next/font`.

### Tahap 3: Pembuatan Komponen Reusable (UI Components)
Buat folder `components/` di root proyek dan bangun komponen-komponen dasar berikut terlebih dahulu. Pastikan komponen ini fleksibel dan bisa menerima props:
1.  `Navbar.tsx`: Komponen navigasi yang responsif (menjadi hamburger menu di layar kecil) dan *sticky* (menempel di atas saat di-scroll).
2.  `Footer.tsx`: Komponen di bagian bawah halaman untuk informasi hak cipta dan link ke sosial media (GitHub, LinkedIn).
3.  `Button.tsx`: Komponen tombol yang bisa digunakan ulang dengan berbagai varian (primary, secondary, outline) dan animasi efek *hover*.
4.  `ProjectCard.tsx`: Komponen untuk menampilkan setiap item proyek (berisi gambar/thumbnail, judul, deskripsi singkat, dan *badges/tags* untuk teknologi yang digunakan).

### Tahap 4: Pembuatan Halaman Utama (Sections)
Kerjakan halaman utama (`app/page.tsx`) dengan membaginya ke dalam beberapa bagian (sections) yang jelas:
1.  **Hero Section:** Bagian paling atas yang pertama kali dilihat pengguna. Berisi sapaan, nama lengkap, *role/profesi* (misal: "Frontend Developer" atau "Software Engineer"), deskripsi singkat yang menarik, dan tombol Call-to-Action (CTA) seperti "Contact Me" atau "View My Work".
2.  **About Section:** Paragraf singkat yang menceritakan tentang diri sendiri, latar belakang, dan ketertarikan profesional.
3.  **Skills Section:** Tampilkan daftar keahlian teknis (bahasa pemrograman, framework, tools) menggunakan grid ikon atau visual *badges*.
4.  **Projects Section:** Tampilkan daftar proyek terbaik yang pernah dikerjakan menggunakan komponen `ProjectCard` yang telah dibuat di Tahap 3.
5.  **Contact Section:** Bagian untuk menghubungi, bisa berupa formulir kontak sederhana atau sekadar alamat email yang bisa di-klik.

### Tahap 5: Menambahkan Interaksi dan Animasi (Polishing)
1.  Bungkus komponen atau section tertentu dengan komponen dari Framer Motion (`<motion.div>`) untuk memberikan efek transisi.
2.  Buat efek *scroll reveal* (elemen muncul perlahan dengan *fade-in* saat pengguna men-scroll halaman ke bawah).
3.  Tambahkan *micro-animations* pada elemen interaktif seperti *hover effects* yang halus pada tombol, link, dan Project Card agar UI terasa hidup dan "premium".

### Tahap 6: Optimasi SEO dan Responsivitas
1.  Lakukan pengecekan pada berbagai ukuran layar. Pastikan semua section terlihat proporsional dan tidak rusak saat dibuka di perangkat mobile (HP), tablet, maupun desktop. Gunakan utility classes responsif bawaan Tailwind (`sm:`, `md:`, `lg:`).
2.  Tambahkan *Title*, *Description*, dan *Meta Tags* yang sesuai di file `app/layout.tsx` menggunakan fitur Metadata API dari Next.js agar website mudah ditemukan di mesin pencari.
3.  Pastikan menggunakan struktur HTML5 semantic yang benar (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>` tunggal per halaman).

### Tahap 7: Testing dan Deployment
1.  Lakukan pengecekan menyeluruh pada semua navigasi link dan tombol CTA.
2.  Jalankan perintah `npm run build` di terminal untuk memastikan proyek dapat di-*compile* untuk *production* tanpa error.
3.  Deploy proyek yang sudah selesai ke platform hosting modern seperti **Vercel** (sangat direkomendasikan karena dikembangkan oleh kreator Next.js dan mendukung integrasi otomatis dengan GitHub).
