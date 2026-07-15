# 📝 Issue: Penambahan Proyek Baru "Digital Wedding Invitation Platform"

**Deskripsi:**
Terdapat penambahan portofolio proyek terbaru yang perlu dimasukkan ke dalam halaman "Projects". Proyek ini adalah sebuah platform undangan pernikahan digital interaktif dengan fitur manajemen tamu, RSVP, *guestbook*, dan integrasi Google Maps.

**Tujuan:**
Dokumen ini dibuat sebagai panduan instruksi (planning) bagi Junior Programmer atau AI Assistant untuk mengimplementasikan dan menambahkan data proyek baru ini ke dalam *frontend* portofolio.

---

## 📄 Data Proyek Baru

Harap tambahkan data proyek berikut ke urutan paling atas di bagian *Featured Projects*:

*   **Title:** Digital Wedding Invitation Platform
*   **Description:** Developed a responsive and interactive Digital Wedding Invitation web application designed to provide a seamless user experience for digital event invitations. Key features include dynamic guest management, personalized link generation, RSVP tracking, digital guestbook/wishes, and integrated Google Maps for venue navigation. Structured an optimized relational database to efficiently handle RSVP and wishes storage.
*   **Tags:** (Gunakan badge/tags teknologi yang sesuai, contoh: `["Web App", "Responsive Design", "Database", "Google Maps API", "RSVP System"]` atau sesuaikan jika ada bahasa spesifik yang digunakan seperti `["React", "Node.js", "MySQL"]`).
*   **GitHub URL:** `https://github.com/mhderdnsyh` (Atau biarkan kosong/ubah jika ada link spesifik).
*   **Gradient:** `from-rose-600/70 via-pink-600/70 to-red-600/70` (Saran kombinasi warna gradient card agar bernuansa romantis/pernikahan).

---

## 🛠️ Tahapan Implementasi

Berikut adalah langkah-langkah yang harus dilakukan untuk menerapkan penambahan proyek ini:

1.  **Lokasi File:**
    Buka file komponen yang merender daftar proyek. File ini berada di direktori `src/components/sections/Projects.tsx`.

2.  **Identifikasi Variabel Data:**
    Di dalam komponen `Projects.tsx`, cari array bernama `projectList` yang menyimpan daftar objek proyek.

3.  **Penambahan Data Proyek:**
    Tambahkan objek JSON baru yang berisi data proyek di atas ke dalam array `projectList`.
    *Penting:* Letakkan objek baru ini di baris pertama di dalam array (di indeks ke-0), tepat sebelum proyek `"vits-project"`, agar proyek terbaru muncul di posisi paling awal saat halaman dimuat.

    *Contoh format objek:*
    ```javascript
    {
      title: "Digital Wedding Invitation Platform",
      description: "Developed a responsive and interactive Digital Wedding Invitation web application designed to provide a seamless user experience for digital event invitations. Key features include dynamic guest management, personalized link generation, RSVP tracking, digital guestbook/wishes, and integrated Google Maps for venue navigation. Structured an optimized relational database to efficiently handle RSVP data and digital wishes storage.",
      tags: ["Web App", "Responsive Design", "Relational Database", "Google Maps", "RSVP"],
      githubUrl: "https://github.com/mhderdnsyh",
      demoUrl: "https://surya-juni-wedding.vercel.app/",
      gradient: "from-rose-600/70 via-pink-600/70 to-red-600/70",
    }
    ```

4.  **Verifikasi (Testing Lokal):**
    *   Simpan file `Projects.tsx`.
    *   Buka terminal dan jalankan server *development* dengan perintah `npm run dev`.
    *   Buka browser dan gulir (scroll) ke bagian "Portfolio" / "Featured Projects".
    *   Pastikan kartu (*card*) proyek "Digital Wedding Invitation Platform" muncul di urutan pertama.
    *   Cek kesesuaian teks deskripsi, apakah terpotong dengan baik atau rapi, serta pastikan warna gradient card berfungsi dengan baik.
