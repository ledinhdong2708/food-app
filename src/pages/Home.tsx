import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "../components/Header/Header";
import HomeImage from "../images/home-background2.jpg";

export default function Home() {
  return (
    <Box>
      <Header />
      <img
        src={HomeImage}
        alt=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <Typography variant="h2" component="h2">
          We deliver delicious &{" "}
          <Typography variant="h2" sx={{ color: "#2196f3" }}>
            healthy food
          </Typography>
        </Typography>
        <Button
          size="large"
          sx={{ mt: 2, backgroundColor: "#2196f3" }}
          variant="contained"
        >
          Order
        </Button>
      </Box>
    </Box>
  );
}
