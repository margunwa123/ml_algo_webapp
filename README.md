# Kumpulan algoritma ML (solver soal)

## Jalanin nextjs:

```bash
npm run dev
# or
yarn dev
```

lalu buka http://localhost:3000 di browser

## bagi yg gabisa typescript:

bikin pake javascript aja :D, typescript dan javascript bisa jalan berdampingan kyk aku dan kamu uwu
Kalo ga ngerti kode typescript yang dibikin di orang lain, sabi tanya orangnya aja biar dijelasin
drpd bingung sendiri. Udh mau kontribusi = keren (^-^)b

## Buat yang mau develop tampilan

- File front end ada di folder src dengan struktur:
  - layouts -> nyimpen layout yang digunain semua page, berisi header dan footer sama children
  - styles -> nyimpen style secara global
  - components -> nyimpen komponen riek
  - pages -> nyimpen halaman halaman yang bisa diakses di website
- Library Front end? (Masih belom ditentuin), bisa diskusiin nanti

## Buat yang mau develop algoritma

- File algoritma ada di folder packages
  - Namain file sesuai algoritma yang mo dibuat
  - misal ada algoritma yang emang ada banyak jenisnya, misal untuk gradient ada ascent, descent, batch descent, bisa satuin jadi 1 file tapi bikin beberapa kelas atau bikin folder sendiri namanya gradient, lalu bikin disitu
  - setiap kelas algoritma ada metode solve() yang bakal dipanggil oleh button "solve" nantinya di front end

## Kejaran utama saat ini:

- bikin svm
- bikin gradient (descent, ascent)
