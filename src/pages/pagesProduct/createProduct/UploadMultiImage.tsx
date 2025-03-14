import { Dispatch, SetStateAction, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function UploadMuitiImage({
  images,
  setImages,
  text,
  id,
}: {
  images: File[] | [];
  setImages: Dispatch<SetStateAction<File[] | []>>;
  text: string;
  id: string;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setImages((prev) => [...prev, ...newImages]);
    }
  };
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      images.forEach((image) =>
        URL.revokeObjectURL(URL.createObjectURL(image))
      );
    };
  }, [images]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "150px",
        border: "2px dashed #aaa",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        overflow: "hidden",
        cursor: "pointer",
        padding: "10px",
      }}
      onClick={() => document.getElementById(id)?.click()}
    >
      <input
        id={id}
        type="file"
        multiple
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
      {images.length > 0 ? (
        images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: 80,
              height: 80,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "rgba(255, 255, 255, 0.7)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                removeImage(index);
              }}
            >
              <Delete color="error" />
            </IconButton>
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          اضغط هنا لرفع صور {text}
        </Typography>
      )}
    </Box>
  );
}
