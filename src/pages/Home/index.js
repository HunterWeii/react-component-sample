import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import "./index.scss";
import { ButtonIcon, Icon } from "components";
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${ props => props.background }
`;

const PadSlider = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  background-color: #fff;
`;

const SliderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.background }
`

const RightAbsoluteButton = styled(ButtonIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 50px;
  z-index: 1;
`;

const LeftAbsoluteButton = styled(ButtonIcon)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 1;
`;

const isInViewPort = dom => {
  let bounding = dom.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default function Home() {
  const [ items, setItem ] = useState(["javascript"]);
  const addItem = () => setItem( prevItem => [ ...prevItem, `javascript - ${Date.now()}` ] );
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const [slide1AutoPlay, setSlide1AutoPlay] = useState(true);
  const [slide2AutoPlay, setSlide2AutoPlay] = useState(true);
  const Slide2 = useMemo(function() {
    console.log("slide 2", slide2AutoPlay)
    return (
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        autoPlay={slide2AutoPlay}
        centerMode
        infiniteLoop
        centerSlidePercentage={50}
      >
        <PadSlider >
          <SliderContent background="red">1</SliderContent>
        </PadSlider>
        <PadSlider>
          <SliderContent background="blue">2</SliderContent>
        </PadSlider>
        <PadSlider>
          <SliderContent background="green">3</SliderContent>
        </PadSlider>
        <PadSlider>
          <SliderContent background="yellow">4</SliderContent>
        </PadSlider>
        <PadSlider>
          <SliderContent background="pink">5</SliderContent>
        </PadSlider>
      </Carousel>
    )
  }, [slide2AutoPlay]);


  useEffect(() => {
    const handleScroll = () => {
      setSlide1AutoPlay( isInViewPort(slide1.current) );
      setSlide2AutoPlay( isInViewPort(slide2.current) );
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="home">
      <button onClick={ addItem }>Add Item</button>
      <ul>
        {
          items.map((item, index) => <li key={index}>{ item }</li>)
        }
      </ul>
      <div>
        <ButtonIcon
          itemLeft={ <AddSharpIcon /> }
          itemRight={ <ExpandMoreSharpIcon /> }
          onClick={ () => alert("soham") }
        >
          Expand
        </ButtonIcon>
      </div>
      <div>
        <Icon 
          color="blue"
          size="12px"
        >
          <ExpandMoreSharpIcon />
        </Icon>
      </div>
      <div ref={slide1}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay={slide1AutoPlay}
          interval={7000}
          renderArrowPrev={ (fn) => <LeftAbsoluteButton onClick={fn}><ChevronLeftIcon /></LeftAbsoluteButton> }
          renderArrowNext={ (fn) => <RightAbsoluteButton onClick={fn}><ChevronRightIcon /></RightAbsoluteButton> }
        >
          <Slider background="red">1</Slider>
          <Slider background="blue">2</Slider>
          <Slider background="green">3</Slider>
        </Carousel>
      </div>
      <div ref={slide2} style={{ "marginTop": 100 }}>
        { Slide2 }
      </div>
    </div>
  )
}
