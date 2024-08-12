import './Footer.css'
import React, { useLayoutEffect, useState } from "react";

function Footer() {
	return (
		<div className="footer">
		<div className='footer--fields--container'>
		<div className="footer--fields" >
		<div className='endereço footer__block'>
		<div>
		<h2>Endereços</h2>
		<div className="paragraphs--footer">
		<p>RUA ASSIS FIGUEIREDO, n° 1045 - CENTRO</p>
		<p>RUA PARAÍBA, n° 329 - CENTRO</p>
		<p>RUA PREFEITO CHAGAS, n° 375 - CENTRO</p>
		<p>RUA RIO GRANDE DO SUL, n° 825 - CENTRO</p>
		<p>AVENIDA ALCOA, n° 6850 - 2 - JARDIM PARAÍSO</p>
		<p>RUA ASSIS FIGUEIREDO, n° 1169 - CENTRO</p>
		</div>
		<div className="paragraphs--footer--mobile">
		<p><b>RUA ASSIS FIGUEIREDO,</b><br></br> n° 1045 - <b>CENTRO</b></p>
	<p><b>RUA PARAÍBA,</b><br></br> n° 329 - <b>CENTRO</b></p>
		<p><b>RUA PREFEITO CHAGAS,</b><br></br> n° 375 - <b>CENTRO</b></p>
		<p><b>RUA RIO GRANDE DO SUL,</b><br></br> n° 825 - <b>CENTRO</b></p>
		<p><b>AVENIDA ALCOA,</b><br></br> n° 6850/2 - <b>JARDIM PARAÍSO</b></p>
		<p><b>RUA ASSIS FIGUEIREDO,</b><br></br> n° 1169 - <b>CENTRO</b></p>
		</div>
		</div>
</div>
		<div className="footer__second_col footer__block">
		<div className='contato f--field'>
		<h2>CONTATO</h2>

		<div>
		<a href="https://api.whatsapp.com/send/?phone=553598652571&type=phone_number&app_absent=0" className='wpp'>WHATSAPP COMERCIAL: <span>(35) 9 9865-2571</span></a>
		<a href="https://api.whatsapp.com/send/?phone=553598652571&type=phone_number&app_absent=0" className='wpp__mobile'><p>WHATSAPP COMERCIAL: </p><p>(35) 9 9865-2571</p></a>
		<div className="footer__follow_us">
		<h2>Nos siga:</h2>
		<a className="footer__social footer__fb" href="https://www.facebook.com/oticaassisoficial">
		<img src="assets/assis/icone6.svg" alt=""/>
		<p>/OTICAASSISOFICIAL</p>
		</a>
		<a className="footer__social footer__ig" href="https://www.instagram.com/otica.assis/">
		<img src="assets/assis/icone7.png" alt=""/>
		<p>@ÓTICA.ASSIS</p>
		</a>
</div>
		</div>
		</div>

		</div>
		<div className="logo__footer footer__block">
		<img className="logo__footer__img" src="assets/assis/LOGO ASSIS.png" alt="logo ótica assis"/>
		<div className="follow__us__mobile">

		<a className="footer__social footer__fb" href="https://www.facebook.com/oticaassisoficial">
		<img src="assets/assis/icone6.svg" alt=""/>
</a>

		<a className="footer__social footer__ig" href="https://www.instagram.com/otica.assis/">
		<img src="assets/assis/icone7.png" alt=""/>
</a>

		</div>
		</div>
		</div>
		</div>
		<div className="rights__reserved">
		<img src="assets/assis/icone5.svg"/>
		<p>2024 Ótica Assis. Todos os direitos reservados</p>
		</div>
		</div>
	);
}

export default Footer;
