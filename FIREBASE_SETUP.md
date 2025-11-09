# Firebase Configuration Guide

## Setup Firebase untuk skuleMate

### 1. Instalasi Dependency

Firebase SDK sudah terinstall. Jika perlu install ulang:
```bash
npm install firebase
```

### 2. Konfigurasi Environment Variables

1. Copy file `.env.local.example` menjadi `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Isi kredensial Firebase Anda di `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

### 3. Struktur Firestore

Buat collection dan document berikut di Firestore:

```
firestore/
└── config/
    └── mUIOBDUemJm4EbANfmkV/
        ├── link-api: "https://your-api-url.com"
        └── api-link: "https://fallback-api-url.com"
```

### 4. Prioritas API Link

Fungsi `getApiLink()` akan mengambil API link dengan prioritas:

1. **Field `link-api`** dari Firestore document `config/mUIOBDUemJm4EbANfmkV`
   - Jika valid (bukan "-", "", atau kosong)
   
2. **Field `api-link`** dari Firestore document `config/mUIOBDUemJm4EbANfmkV`
   - Jika `link-api` tidak valid
   
3. **sessionStorage `apiLink`**
   - Jika kedua field Firestore tidak tersedia

### 5. Penggunaan

Di komponen atau API route:

```typescript
import { getApiLink } from '@/app/firebase-config';

// Dalam fungsi async
const apiLink = await getApiLink();
if (!apiLink) {
  // Handle error: API link tidak ditemukan
}
```

### 6. File yang Sudah Diupdate

- ✅ `app/firebase-config.ts` - Konfigurasi Firebase & fungsi getApiLink
- ✅ `app/components/ui/section/Upload/form.tsx` - Menggunakan getApiLink
- ✅ `app/services/api.js` - Menggunakan getApiLink

### 7. Cara Mendapatkan Firebase Credentials

1. Buka [Firebase Console](https://console.firebase.google.com)
2. Pilih atau buat project
3. Pergi ke Project Settings > General
4. Scroll ke bagian "Your apps"
5. Pilih Web App atau buat baru
6. Copy konfigurasi Firebase ke `.env.local`

### 8. Security Rules (Opsional)

Untuk keamanan, set Firestore Rules agar document `config` hanya bisa dibaca:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /config/{document=**} {
      allow read: if true;
      allow write: if false; // Atau sesuaikan dengan kebutuhan admin
    }
  }
}
```

## Troubleshooting

- **Error: Cannot find module 'firebase'**
  - Run: `npm install firebase`

- **API link tidak ditemukan**
  - Cek console browser untuk log
  - Pastikan document Firestore sudah dibuat
  - Cek environment variables sudah benar

- **CORS error**
  - Pastikan API backend mengizinkan origin dari aplikasi Anda
