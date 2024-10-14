"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Backdrop,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

export function Navbar() {
  // eslint-disable-next-line
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({});
  const [isBackdropOpen, setBackdropOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sm = useMediaQuery('(max-width:1201px)');
  const xs = useMediaQuery('(max-width:993px)');
  const xxs = useMediaQuery('(max-width:835px)');
  const xxl = useMediaQuery('(max-width:786px)');
  const xl = useMediaQuery('(max-width:576px)');
  const l = useMediaQuery('(max-width:430px)');
  const m = useMediaQuery('(max-width:360px)');
  const s = useMediaQuery('(max-width:320px)');
  const handleMenuOpen = (event: MouseEvent<HTMLElement>, menuKey: string) => {
    /*   setTimeout(() => {
      }, 500);  */
    setAnchorEl((prev) => ({ ...prev, [menuKey]: event.currentTarget }));
    setBackdropOpen(true);
    setDrawerOpen(false)
  };

  const handleMenuClose = (menuKey: string) => {
    setAnchorEl((prev) => ({ ...prev, [menuKey]: null }));
    setBackdropOpen(false);
  };


  const handleSignUpClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = ["About", "Awards", "BY $DIFO"];
  const subMenuItems = [
    "Referance Program", "Video Contest", "Graphic Contest", "Content Contest", "Airdrop"
  ]
  const [openMenu, setOpenMenu] = useState(null);
  // eslint-disable-next-line
  const toggleMenu = (menuName: any) => {
  // eslint-disable-next-line
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const getDrawerWidth = () => {
    if (s) return 256;
    else if (m) return 296;
    else if (l) return 350;
    else if (xl) return 436;
    else if (xxl) return 626;
    else return 626
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #000000 0%, #1A0173 100%)",
          height: "100px",
        }}
      >
        <Box className="flex items-center h-full" sx={{
          padding: "32px 26px",
        }}>
          <Toolbar
            className="w-full flex justify-between"
            sx={{ minHeight: "50px!important", zIndex: drawerOpen ? 9999 : 1, rowGap: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", sm: { gap: "10px" }, gap: "32px", width: "auto" }} >
              <Link href="/" passHref>
                <img
                  src="/icons/logo.png"
                  alt="logo"
                  style={{ height: "auto", cursor: "pointer" }}
                />
              </Link>
              {
                !xxl &&
                <Box sx={{ gap: 2, justifyContent: "space-around", width: "100%", display: "flex" }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item}
                      color="inherit"
                      className="gap-2"
                      onClick={(e) => handleMenuOpen(e, item)}
                    >
                      <Typography
                        sx={{ transition: "transform 0.3s ease", fontSize: xxs ? "12px" : "16px" }}
                        color={anchorEl[item] ? "#FFCA3A" : "inherit"}
                      >
                        {item}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{
                          color: anchorEl[item] ? "#FFCA3A" : "inherit",
                          transition: "transform 0.3s ease",
                          transform: anchorEl[item]
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </Button>
                  ))}
                </Box>
              }

            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              {
                !xxl &&
                <Button
                  className="gap-2"
                  variant="outlined"
                  sx={{
                    width: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : sm? "auto":"auto",
                    height: s ? 32 : m ? 40 : l ? 40 : xl || sm ? 48 : "auto",
                    minWidth: s ? 32 : m ? 40 : l ? 40 : xl || sm ? 48 : "auto",
                    minHeight: s ? 32 : m ? 40 : l ? 40 : xl || sm ? 48 : "auto",
                    borderColor: "white",
                    color: "white",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "16px"
                  }}
                >
                  <img src="icons/wallet.svg" />
                  {
                    !xs &&
                    <Typography> Connect Wallet</Typography>
                  }
                </Button>
              }

              {
                !xxs &&
                <Button
                  className="hidden md:inline"
                  variant="contained"
                  sx={{
                    backgroundColor: "#4480F5",
                    textTransform: "none",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: "#376dcf" },
                  }}
                >
                  <Typography className="hidden md:inline ml-2" >Log In</Typography>
                </Button>
              }

              <Button
                className="gap-2"
                variant="contained"
                onClick={() => xxs && handleSignUpClick()}
                sx={{
                  width: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : "auto",
                  height: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : "auto",
                  minWidth: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : "auto",
                  minHeight: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : "auto",
                  textTransform: "none",
                  fontSize: "16px",
                  background:
                    "linear-gradient(69.78deg, #DCE8FF 3.52%, #4480F5 45.51%, #DCE8FF 98.95%)",
                  color: "#fff",
                  "&:hover": {
                    background:
                      "linear-gradient(69.78deg, #C6D8FF 3.52%, #376DCF 45.51%, #C6D8FF 98.95%)",
                  },
                }}
              >
                <PersonIcon sx={{ color: "white", fontSize: s ? 16 : 20 }} />
                {
                  !xxs &&
                  <Typography  >Sign Up</Typography>
                }
              </Button>
              {drawerOpen &&
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleDrawerClose}
                  sx={{
                    width: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : 48,
                    height: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : 48,
                    minWidth: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : 48,
                    minHeight: s ? 32 : m ? 40 : l ? 40 : xl ? 48 : 48,
                    borderColor: "white",
                    color: "white",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                >
                  <CloseIcon sx={{ color: "white", fontSize: s ? 16 : 20 }} />
                </Button>
              }

            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      {menuItems.map((item) => (
        <Menu
          key={item}
          anchorEl={anchorEl[item]}
          open={Boolean(anchorEl[item])}
          onClose={() => handleMenuClose(item)}
          sx={{
            mt: "35px",
            ml: "-5%",
            ".MuiPaper-root": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="w-[441px] h-[500px] justify-center p-4 gap-8 flex flex-col border-[3px] border-[#36394A] rounded-md bg-[#1A1B25]">
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                About Difo Launchpad <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                Tokenomics <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                Team <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                Career <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                Difo Finance <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                <Box >Whitepaper <ArrowOutwardIcon /></Box>
                <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
            <MenuItem
              sx={{ color: "#A4ACB9", "&:hover": { color: "#fff" } }}
            >
              <Box className="w-full flex justify-between">
                Difo Taken <KeyboardArrowRightIcon />
              </Box>
            </MenuItem>
          </div>
        </Menu>
      ))}

      <Backdrop
        open={isBackdropOpen || drawerOpen}
        onClick={() => setBackdropOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1, top: 100, background: "#000000CC" }}
      />
      {drawerOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '100px',
            right: 0,
            width: `${getDrawerWidth()}px`,
            height: 'calc(100% - 100px)',
            backgroundColor: '#1A1B25',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.3s ease',
            zIndex: 9999,
          }}
        >
          {
            //#region top List
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
              <Box className="flex justify-between gap-x-3 ">
                <Button
                  variant="contained"
                  fullWidth
                  size="small"
                  sx={{
                    backgroundColor: '#4480F5',
                    textTransform: 'none',
                    fontSize: s ? "12px" : m ? '14px' : l ? '14px' : '16px',
                    '&:hover': { backgroundColor: '#376dcf' },
                  }}
                >
                  Log In
                </Button>
                <Button
                  className="gap-2"
                  variant="contained"
                  fullWidth
                  size="small"
                  sx={{
                    textTransform: 'none',
                    fontSize: s ? "12px" : m ? '14px' : l ? '14px' : '16px',
                    background: 'linear-gradient(69.78deg, #DCE8FF 3.52%, #4480F5 45.51%, #DCE8FF 98.95%)',
                    color: '#fff',
                    '&:hover': {
                      background: 'linear-gradient(69.78deg, #C6D8FF 3.52%, #376DCF 45.51%, #C6D8FF 98.95%)',
                    },
                  }}
                >
                  <PersonIcon sx={{ fontSize: l ? "18px" : "22px" }} /> Sign Up
                </Button>
              </Box>
              <Box className="w-full">
                <Button
                  className="gap-2"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "16px"
                  }}
                >
                  <img src="icons/wallet.svg" />

                  <Typography> Connect Wallet</Typography>
                </Button>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
                {
                  ['About', 'Awards', 'By Difo'].map((menu) => (
                    <Box key={menu}>
                      <Button
                        className="flex justify-between normal-case"
                        key={menu}
                        fullWidth
                        color="inherit"
                        onClick={() => toggleMenu(menu)}
                      >
                        <Typography
                          className=" text-sm lg:text-base flex gap-x-2"
                          sx={{ transition: "transform 0.3s ease" }}
                          color={openMenu === menu ? "#FFCA3A" : "white"}
                        >
                          <Typography>•</Typography>
                          {menu}
                        </Typography>
                        <KeyboardArrowRightIcon
                          sx={{
                            color: openMenu === menu ? "#FFCA3A" : "white",
                            transition: "transform 0.3s ease",
                            transform: openMenu === menu
                              ? "rotate(-90deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </Button>

                      {openMenu === menu && (
                        <Box sx={{ pl: 2, pb: 1 }}>
                          {
                            subMenuItems.map((item, key) => {
                              return <Button
                                className="flex justify-between normal-case"
                                key={key}
                                fullWidth
                                color="inherit"
                              >
                                <Typography
                                  className=" text-sm lg:text-base flex gap-x-2"
                                  sx={{ transition: "transform 0.3s ease" }}
                                  color={/* openMenu === menu ? "#FFCA3A" : */ "#A4ACB9"}
                                >
                                  {item}
                                </Typography>
                                <KeyboardArrowRightIcon
                                  sx={{
                                    color: /* openMenu === menu ? "#FFCA3A" : */ "#A4ACB9",
                                    /*  transition: "transform 0.3s ease",
                                     transform: openMenu === menu
                                       ? "rotate(-180deg)"
                                       : "rotate(0deg)", */
                                  }}
                                />
                              </Button>
                            })
                          }


                        </Box>
                      )}
                    </Box>
                  ))
                }
              </Box>
            </Box>
            //#endregion
          }
        </Box>
      )}

    </>
  );
}
