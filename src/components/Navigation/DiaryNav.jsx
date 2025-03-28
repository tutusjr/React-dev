import logo from "../../assets/svg/logo/slimMomLogo.svg";
import logoMobile from "../../assets/svg/logo/slimMomLogoMobile.svg";
import logoText from "../../assets/svg/logo/slimMomLogoText.svg";
import style from "./DiaryNav.module.css";
import { useNavigate } from "react-router-dom";
import modalMenu from "../../assets/svg/modal-menu-vektor.svg";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import DiaryModal from "../Modal/DiaryModal/index";
import closeVektor from "../../assets/svg/close-vektor.svg";



const DiaryNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logoMobileContainer}>

          <img src={logoMobile} alt="Slim Mom Logo" width="46" height="44" className={style.logoMobile} onClick={() => navigate("/")} />
          <img src={logoText} alt="Slim Mom Logo" width="105" height="44" className={style.logoText} onClick={() => navigate("/")} />
        
        </div>

        <div className={style.userMenuContainer}>
          <div className={style.userMenuTablet}><UserMenu /></div>
          <div className={style.modalMenuContainer}>
            {isModalOpen ? 
              <img src={closeVektor} alt="Close" width="12" height="12" className={style.close} onClick={handleClose} /> : 
              <img src={modalMenu} alt="Modal Menu Logo" width="18" height="12" className={style.modal} onClick={() => setIsModalOpen(true)} />
            }
          </div>
          <DiaryModal isOpen={isModalOpen} onClose={handleClose} />
        </div>
      </div>

      <div className={style.nav}>

        <img src={logo} alt="Slim Mom Logo" width="167" height="66" className={style.logo} onClick={() => navigate("/")} />
        
        <button 
        type="button" 
        className={`${style.button} ${location.pathname === "/diary" ? style.active : ""}`} 
        onClick={() => navigate("/diary")}>
          DIARY
          </button>


        <button 
        type="button" 
        className={`${style.button} ${location.pathname === "/calculator" ? style.active : ""}`} 
        onClick={() => navigate("/calculator")}>
          CALCULATOR
          </button>
      </div>

      <div className={style.userMenu}><UserMenu /></div>
    </div>
  );
};

export default DiaryNav;
