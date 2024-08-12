// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import './Ruler.css'


function Ruler(props) {
  return (
		<Swiper 
			className="ruler"
			slidesPerView={1}
			loop={true}
			speed={2000}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			breakpoints={{
				1066: {
					slidesPerView: 3,
				}
			}}
		>
			{props.items.map(e => {
				return (
					<SwiperSlide className="ruler__item">
						<img src={e.icon} alt={e.iconName} />
						<p className="ruler__title">{e.title}</p>
						<p className="ruler__desc">{e.desc}</p>
					</SwiperSlide>
				)
			})}
		</Swiper>
  );
}

export default Ruler;
