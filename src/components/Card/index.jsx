import './Card.css'
import WppBtn from '../Buttons/wppBtn';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';


function ImgCarousel(props) {
	if (typeof props.img !== "string") {
		return (
			<Swiper 
				autoplay={{delay:props.delay, disableOnInteraction: false}}
				loop={true}
				modules={[Autoplay]}
				style={{width:"100%", height:"100%", borderRadius:"50px"}}>
				{props.img.map(i => {
					return (
						<SwiperSlide key={"slideImgCard--" + props.img}>
							<img class="card__image__custom" key={"imgCollection--" + props.img} src={"/assets/" + i} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		)
	} else {
		return <img class="card__image__custom" src={"/assets/" + props.img} />
	}
}


function Card(props) {
	let formater = new Intl.NumberFormat('pt-BR', {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	let precoFormatado = formater.format(props.preco/12)

  return (
		<div className="card__custom" style={{...props.propsStyle, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
			<ImgCarousel img={props.img} frameColor={props.frameColor} delay={props.delay} />
			<div className="card--description">
				<h2 >{props.description}</h2>
		<div className="card__description_price_container">
				<h3 className="card--description--price">{"12x de " + precoFormatado} sem juros</h3>
				<p className="card--description--price"> ou {formater.format(props.preco)} à vista</p>
		</div>
				<WppBtn
					icone={true}
					mensagem= {props.btnMensagemPrefixo + props.modelo + "."}
					texto="Comprar"
					btnStyle={{...props.btnStyle, width:"80%", aspectRatio:"6/1.2", margin:0}}
					iconeSize={props.iconeSize}
				/>
			</div>
    </div>
  );
}

export default Card;


				// <a href={"https://wa.me/553598254687?text=" + props.mensagem + props.produto} target="_blank" rel="noreferrer">
				// 	<button className="card--desciption--button">
				// 	<p><i class="fa fa-whatsapp" aria-hidden="true"></i> COMPRE AGORA</p></button></a>
			// </div>
//
//
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
//
//
//
					// <img loading="lazy" className="card--image" src={"/assets/" + props.img} alt={props.marca + " " + props.modelo}/>
//
//
				// <img loading='lazy' className="card--image--frame" src={"/assets/frame_" + props.frameColor.replace("#","") + ".png"} alt=""/>
