import { useEffect, useState } from "react";

export default function useImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    return () => setImage(null);
  }, []);
  return { image, handleImageUpload };
}
