import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userAuth/auth";
import { $axios } from "../axios/axios";

const pages = [
  { label: "Main", path: "/" },
  { label: "Protected", path: "/protected" },
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { user: userToken } = useUserContext();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => {
                if (
                  userToken &&
                  (page.label == "Main" || page.label == "Protected")
                ) {
                  return (
                    <MenuItem
                      key={page.label}
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {page.label}
                    </MenuItem>
                  );
                } else if (
                  !userToken &&
                  (page.label == "Register" ||
                    page.label == "Protected" ||
                    page.label == "Main" ||
                    page.label == "Login")
                ) {
                  return (
                    <MenuItem
                      key={page.label}
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {page.label}
                    </MenuItem>
                  );
                }
              })}
              {userToken && (
                <MenuItem
                  key={"logout"}
                  onClick={() => {
                    $axios.post("/logout");
                  }}
                >
                  <Typography>Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (
                userToken &&
                (page.label == "Main" || page.label == "Protected")
              ) {
                return (
                  <Button
                    key={page.label}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.label}
                  </Button>
                );
              } else if (
                !userToken &&
                (page.label == "Register" ||
                  page.label == "Protected" ||
                  page.label == "Main" ||
                  page.label == "Login")
              ) {
                return (
                  <Button
                    key={page.label}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.label}
                  </Button>
                );
              }
            })}
            {userToken && (
              <Button
                key={"logout"}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => {
                  handleCloseNavMenu;
                  $axios.post("/logout");
                }}
              >
                <Typography>Logout</Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
