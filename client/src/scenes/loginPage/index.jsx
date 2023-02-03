import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1.5rem 10%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="36px" color="primary">
          Donut
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;