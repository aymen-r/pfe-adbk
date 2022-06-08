import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const Navbar = () => {
  return (
    <div className="navbar d-flex flex wrap">
      <div className="search d-flex align-items-center mx-3">
        <input className='mx-2' type="text" placeholder="Search..." />
        <SearchIcon />
      </div>
      <div className="d-flex flex wrap align-items-center mx-3">
        <div className="item m-2">
          <LanguageIcon className="icon" />
          English
        </div>
        <div className="item m-2">
          <DarkModeOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item m-2 d-flex border p-2">
          <NotificationsOutlinedIcon className="icon" />
          <div className="counter ">1</div>
        </div>
        <div className="item m-2 d-flex border p-2">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item m-2">
          <FormatListBulletedIcon className="icon" />
        </div>
        <div className="item m-2">
          <AccountCircleIcon className="avatar" />
        </div>
      </div>
    </div>
  )
}
export default Navbar