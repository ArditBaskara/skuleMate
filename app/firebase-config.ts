import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Konfigurasi Firebase - ganti dengan kredensial Anda
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ""
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

/**
 * Fungsi untuk mendapatkan API link dari Firestore atau sessionStorage
 * Priority:
 * 1. Firestore field "link-api" (jika valid)
 * 2. Firestore field "api-link" (jika valid)
 * 3. sessionStorage "apiLink"
 * 
 * @returns {Promise<string | null>} API link atau null jika tidak ditemukan
 */
export const getApiLink = async (): Promise<string | null> => {
  try {
    // Query Firestore
    const configDocRef = doc(db, 'config', '3r8BGI2u0zwfdb2GPqih');
    const docSnap = await getDoc(configDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Cek field "link-api" terlebih dahulu
      const linkApi = data?.['skule-link'];
      if (linkApi && linkApi !== '-' && linkApi !== '' && typeof linkApi === 'string') {
        console.log('Using link-api from Firestore:', linkApi);
        return linkApi.trim();
      }

      // Jika link-api tidak valid, cek field "api-link"
      const apiLink = data?.['api-link'];
      if (apiLink && apiLink !== '-' && apiLink !== '' && typeof apiLink === 'string') {
        console.log('Using api-link from Firestore:', apiLink);
        return apiLink.trim();
      }
    }
  } catch (error) {
    console.warn('Error fetching from Firestore:', error);
  }

  // Fallback ke sessionStorage jika Firestore tidak tersedia atau tidak valid
  try {
    const sessionApiLink = sessionStorage.getItem('apiLink');
    if (sessionApiLink && sessionApiLink !== '-' && sessionApiLink !== '') {
      console.log('Using apiLink from sessionStorage');
      return sessionApiLink;
    }
  } catch (error) {
    console.warn('Error accessing sessionStorage:', error);
  }

  return null;
};

export { db, doc, getDoc };
