'use client'

import React from 'react';
import styles from "./karucel.module.scss";
// import "./Karucel.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowLeft from "../../../public/assets/arrow-left.svg"
import arrowRight from "../../../public/assets/arrow-right.svg"
import sliderItem from "../../../public/assets/slider_item.png"
import { useMediaQuery } from 'react-responsive';
import { isMobile } from 'mobile-device-detect';




type Props = {
  onClick?: () => void,
}

const CustomNextArrow = (props : Props) => (
    <div className={styles.arrow_next} onClick={props.onClick}>
      <img src={arrowRight.src}/>
    </div>
  );
  
  const CustomPrevArrow = (props : Props) => (
    <div className={styles.arrow_prev} onClick={props.onClick}>
      <img src={arrowLeft.src}/>
    </div>
  );

export default function Karucel() {
	const settings = {
		dots: !isMobile,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		nextArrow: !isMobile ? <CustomNextArrow /> : <></>,
		prevArrow: !isMobile ? <CustomPrevArrow /> : <></>,
		speed: 300,
		centerPadding: isMobile ? '49px' : '97px',
		autoplaySpeed: 5000,
		appendDots: (dots: any)  => (
			!isMobile ? <div style={{ position: 'absolute', bottom: '40px', left: '230px', width: 'fit-content' }}>
				<ul className={styles.slickDots}> {dots} </ul>
			</div> : <></>
		),
		customPaging: (i: any) => <div className={styles.customDot}>&nbsp;</div>,
		cssEase: 'linear'
	}

  const big = useMediaQuery({minWidth: 560})
    
    return (
        <div className={styles.container} id='carousel'>
            <div className={styles.inner}>
            <Slider {...settings}>
                <div className={styles.slider_item}>
                    <div className={styles.slider_item_inner}>
                        <img src={sliderItem.src}/>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.slider_item_inner}>
                        <img src={sliderItem.src}/>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.slider_item_inner}>
                        <img src={sliderItem.src}/>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.slider_item_inner}>
                        <img src={sliderItem.src}/>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    )
}

