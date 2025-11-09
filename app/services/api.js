import axios from "axios";
import { db, doc, getDoc, getApiLink } from "../firebase-config";

/**
 * @deprecated Use getApiLink() instead
 * Resolve API base URL using this order:
 * 1. Firestore document `config/mUIOBDUemJm4EbANfmkV` field `link-api` (or `api-link`)
 * 2. sessionStorage key `apiLink`
 * Returns string or null.
 */
export const getApiBase = async () => {
  return await getApiLink();
};

export const uploadImage = async (formData) => {
  try {
    const storedApi = await getApiBase();
    if (!storedApi) {
      alert("API link belum disetting. Silakan pergi ke halaman setting untuk menyetting.");
      window.location.href = "/setting";
      return;
    }

    const API_URL = `${storedApi}/detect-nutrients`;

    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "any-value",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Server Error");
  }
};
