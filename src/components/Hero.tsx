import Image from 'next/image';
import style from './Hero.module.css';
import woman from './/../../public/CreativeWoman.svg';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className={style.hero}>
			<div className={style.gradient} />
			<div>
				<>
					<h2 className={style.text}>Llevamos tu marca a otro nivel con </h2>
					<span className={style.textRed}></span>
				</>
				<p className={style.paragraph}>
					Nuestro enfoque personalizado en diseño y marketing digital nos permite llevar tu marca a otro nivel en un
					mundo cada vez más competitivo.
				</p>
				<Link href="#" style={{ textDecoration: 'none' }}>
					<div className={style.cta}>Contactanos!</div>
				</Link>
			</div>
			<Image className={style.image} width={620} height={600} src={woman} alt="logo" />
		</div>
	);
};

export default Hero;
