
// src/constants/uploadMedia.js
import { API_BASE_URL } from "@/constants/api";

export const uploadMediaToServer = async (files) => {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("media", file); // must match multer field name
  });

  const res = await fetch(`${API_BASE_URL}/blogs/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log("📸 Uploaded media:", data); // ⬅️ DEBUG

  return data;
};
