/**
 * Sengaja BUKAN file "use client".
 *
 * layout.tsx adalah server component. Kalau konstanta ini diekspor dari
 * modul ber-"use client", Next akan mengubahnya jadi referensi klien —
 * bukan string biasa — sehingga tidak bisa disisipkan ke dalam <script>.
 */
export const THEME_STORAGE_KEY = "agi-theme";

/**
 * Dijalankan sebelum halaman digambar, supaya tema yang tersimpan langsung
 * terpasang dan tidak ada kedipan terang -> gelap saat memuat halaman.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t;}}catch(e){}})();`;
