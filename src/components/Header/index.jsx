import './Header.css'
import WppButton from '../Buttons/wppBtn'
import ScrollToBtn from '../Buttons/ScrollToBtn'

function Header(props) {
  return (
		<div className="header">
		<div className='header__nav'>
			<img src="./assets/assis/Logotipo-Ótica-Assis-1.png" alt="Ótica Assis logo"></img>
			<div className='header__nav--menu'>
				<ScrollToBtn nome="Feminino" categoria="FEMININO--OCULOS_DE_GRAU"/>
				<ScrollToBtn nome="Masculino" categoria="MASCULINO--OCULOS_DE_GRAU"/>
				<a href="https://api.whatsapp.com/send/?phone=553598652571&type=phone_number&app_absent=0"><button>Fale conosco</button></a>
			</div>
		</div>
			<div className="header-banner" style={{...props.headerStyle, backgroundRepeat: "no-repeat"}}>
					<div style={{width: "100%", height: "100%"}}>
					<img className="header__flag" src={props.icon ? "./assets/assis/banner 1 landing page assis.svg" : "./assets/assis/banner 1 landing page assis_mobile.svg"} alt="" />
					</div>
			</div>
		</div>
  );
}

export default Header;

			// <img loading="lazy" src="./assets/capa.png" alt="" style={props.imgStyle}/>
