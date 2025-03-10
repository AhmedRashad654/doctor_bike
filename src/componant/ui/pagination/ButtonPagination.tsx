import { Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function ButtonPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
 const setPage = (newPage: number) => {
   const searchParams = new URLSearchParams(location.search);
   searchParams.set("page", newPage.toString());
   navigate(`${location.pathname}?${searchParams.toString()}`);
 };
  return (
    <Box mt={3} display="flex" alignItems="center" gap={1}>
      <Box
        onClick={() => (page > 1 ? setPage(page - 1) : null)}
        sx={{ cursor: page > 1 ? "pointer" : "default" }}
      >
        <ChevronRight sx={{ fontSize: 30, color: "gray" }} />
      </Box>

      <Box display="flex" gap={2} alignItems="center">
        {totalPages <= 3 ? (
          Array.from({ length: totalPages }).map((_, i) => (
            <Box
              key={i}
              p={1}
              px={4}
              bgcolor={page === i + 1 ? "primary.main" : "secondary.main"}
              color={page === i + 1 ? "white" : "black"}
              fontWeight="bold"
              borderRadius={1}
              sx={{ cursor: "pointer" }}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Box>
          ))
        ) : (
          <Box display="flex" gap={2} alignItems="center">
            {Array.from({ length: 2 }).map((_, i) => (
              <Box
                key={i}
                p={1}
                px={4}
                bgcolor={page === i + 1 ? "primary.main" : "secondary.main"}
                color={page === i + 1 ? "white" : "black"}
                fontWeight="bold"
                borderRadius={1}
                sx={{ cursor: "pointer" }}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Box>
            ))}
            <Box
              p={1}
              px={4}
              bgcolor={page > 2 ? "primary.main" : "secondary.main"}
              color={page > 2 ? "white" : "black"}
              fontWeight="bold"
              borderRadius={1}
              height={40}
            >
              {page > 2 ? page : "..."}
            </Box>
          </Box>
        )}
      </Box>

      <Box
        onClick={() => (totalPages > page ? setPage(page + 1) : null)}
        sx={{ cursor: totalPages > page ? "pointer" : "default" }}
      >
        <ChevronLeft sx={{ fontSize: 25, color: "gray" }} />
      </Box>
    </Box>
  );
}
