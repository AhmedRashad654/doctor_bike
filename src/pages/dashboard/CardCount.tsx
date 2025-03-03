import { JSX } from "@emotion/react/jsx-runtime";
import { ListItemIcon, Stack, Typography } from "@mui/material";

function CardCount({
  item,
}: {
  item: {
    name: string;
    Icon: JSX.Element;
    count: number;
  };
}) {
  return (
    <Stack
      gap={"5px"}
      alignItems={"center"}
      width="280px"
      flexGrow={1}
      sx={{
        backgroundColor: "secondary.main",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: 3,
      }}
    >
      <ListItemIcon>{item?.Icon}</ListItemIcon>
      <Stack direction={"row"} alignItems={"center"} gap="15px">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {item?.count}
        </Typography>
        <Typography
          variant="h6"
          color="primary.main"
          sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
        >
          {item?.name}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default CardCount;
