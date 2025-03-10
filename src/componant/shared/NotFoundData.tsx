import { Stack } from "@mui/material";

export default function NotFoundData({ image }: { image: string }) {
  return (
    <Stack
      alignItems={"center"}
      sx={{ width: "100%", minHeight: "60vh", justifyContent: "center" }}
    >
      <img src={image} alt="not-found data" className="md:w-[55%] w-[80%]" />
    </Stack>
  );
}
