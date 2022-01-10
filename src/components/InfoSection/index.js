import React,{useState} from "react";
import { Button } from "../ButtonElements";
import {
  InfoRow,
  InfoContainer,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  BtnWrap,
  TopLine,
  Heading,
  SubTitle,
  Img,
  ImgWrap,
  ArrowRight,
  ArrowForward
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  img,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,dark2
}) => {

  const [hover,setHover] = useState(false);

  const onHover=()=>{
    setHover(!hover);
  } 

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button to="home" 
                  smooth={true}
                  duration={true}
                  spys={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1:0}
                  dark={dark ? 1:0}
                  dark2=
                  {dark2 ? 1:0}
                  
                  
                  >{buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
