import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../feauters/theme";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    // Function to toggle the Drawer (mobile menu)
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };

    // Function to toggle Dark/Light theme
    const toggleDarkLight = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <div className={`p-6 md:p-10 flex justify-between items-center h-32 ${theme === 'dark' ? 'bg-black' : 'bg-gray-200'}`}>
                <Link
                    to="/"
                    className={`text-4xl font-semibold flex gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                    Kaif's <span>Store</span>
                </Link>

                <div className={`xl:hidden ${theme === "dark" ? "text-white" : "text-black"}`}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                        sx={{ fontSize: "36px" }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                {/* Desktop menu */}
                <div className={`gap-9 text-base cursor-pointer items-center hidden xl:flex`}>
                    <ul className={`flex gap-12 text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                            <li>Products</li>
                        </NavLink>
                        <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                            <li>Quiz</li>
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                            <li>Contact</li>
                        </NavLink>
                        <NavLink to="/messages" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                            <li>Messages</li>
                        </NavLink>
                    </ul>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-60 p-3 rounded-3xl outline-none text-black placeholder-orange-500 pr-10"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <i className="fas fa-search text-black"></i>
                        </span>
                    </div>

                    <button className="text-white text-3xl" onClick={toggleDarkLight}>
                        {theme === 'dark' ? <IoSunnyOutline /> : <MdOutlineDarkMode className="text-black" />}
                    </button>

                    <div className="flex gap-10 text-sm">
                        <NavLink to={"/signUp"}>
                            <button className="p-2 rounded-2xl w-20 bg-orange-500 text-white">Sign up</button>
                        </NavLink>
                        <NavLink to={"/login"}>
                            <button className="p-2 rounded-2xl w-20 bg-orange-500 text-white">Log In</button>
                        </NavLink>
                    </div>
                </div>

                {/* Drawer for mobile menu */}
                <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                    <div className="flex justify-end p-4">
                        <IconButton onClick={() => toggleDrawer(false)} sx={{ fontSize: "36px", color: "black" }}>
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <List className="w-72" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
                        <ListItem>
                            <ListItemText>
                                <button className="text-black text-3xl" onClick={toggleDarkLight}>
                                    {theme === 'dark' ? <IoSunnyOutline /> : <MdOutlineDarkMode className="text-black" />}
                                </button>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                                    <li>Home</li>
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                                    <li>Products</li>
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                                    <li>Quiz</li>
                                </NavLink>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                                    <li>Contact</li>
                                </NavLink>
                            </ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>
                                <NavLink to="/messages" className={({ isActive }) => (isActive ? 'text-orange-500' : '')}>
                                    <li>Messages</li>
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to={"/signUp"}>
                                    <button className="p-2 rounded-2xl w-20 bg-orange-500 text-white">Sign up</button>
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <NavLink to={"/login"}>
                                    <button className="p-2 rounded-2xl w-20 bg-orange-500 text-white">Log In</button>
                                </NavLink>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </>
    );
}

export default Navbar;