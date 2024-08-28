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
			<div className='header__promo__text'>
				<h1 className='promo__h1__mobile'><span>COMPROU,</span><br/> GANHOU!</h1>
				<h1 className='promo__h1__pc'><span>COMPROU,</span><br/> GANHOU!</h1>
			<div>
				<h2>12X</h2>
				<p>NO CARTÃO</p>
			</div>
			</div>
					</div>
		</div>
  );
}

export default Header;

			// <img loading="lazy" src="./assets/capa.png" alt="" style={props.imgStyle}/>
