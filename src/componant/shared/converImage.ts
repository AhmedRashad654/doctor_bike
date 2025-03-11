export const fetchImageAsFile = async (imageUrl: string, fileName: string) => {
  try {
    const response = await fetch(imageUrl, { mode: "no-cors" });
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  } catch (error) {
    console.error("فشل تحميل الصورة:", error);
    return null;
  }
};
