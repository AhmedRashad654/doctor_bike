import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function UploadVideo({
  videoFile,
  setVideoFile,
  id,
}: {
  id: string;
  videoFile: File | null;
  setVideoFile: Dispatch<SetStateAction<File | null>>;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

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
        accept="video/*"
        hidden
        onChange={handleFileChange}
      />
      {videoFile ? (
        <Typography variant="body1" color="textSecondary">
          تم رفع الفيديو{videoFile.name}
        </Typography>
      ) : (
        <Typography variant="body1" color="textSecondary">
          اضغط هنا لرفع فيديو
        </Typography>
      )}
    </Box>
  );
}
