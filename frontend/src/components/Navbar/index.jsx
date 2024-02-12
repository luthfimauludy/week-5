import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { setLocale } from '@containers/App/actions';

import classes from './style.module.scss';

const Navbar = ({ title, locale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [menu, setMenu] = useState(null);
  const open = Boolean(menuPosition);
  const openMenu = Boolean(menu);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleClickMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const goProfile = () => {
    navigate('/profile');
  };

  const goCreateEvent = () => {
    navigate('/create-event');
  };

  const doLogout = () => {
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src="/vite.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes.toolbar}>
          {/* <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
            {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
          </div> */}
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
          <div className={classes.toggle} onClick={handleClickMenu}>
            Profile Name
          </div>
        </div>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
        <Menu open={openMenu} anchorEl={menu} onClose={handleCloseMenu}>
          <MenuItem onClick={goProfile}>
            <div className={classes.menuProfile}>Edit Profile</div>
          </MenuItem>
          <MenuItem onClick={goCreateEvent}>
            <div className={classes.menuProfile}>Create Event</div>
          </MenuItem>
          <MenuItem onClick={doLogout}>
            <div className={classes.menuLogout}>Logout</div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
};

export default Navbar;
