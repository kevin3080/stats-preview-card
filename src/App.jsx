import { useEffect, useState } from 'react';
import './App.css'
import styled from 'styled-components'
import desktop from '../public/image-header-desktop.jpg'
import mobile from '../public/image-header-mobile.jpg'



function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    
    <Container>
      <Card>
        <Filter>
          {
            (windowWidth >= 1132) 
            ?
              <Image src={desktop} alt='desktop'/>
            :
              <Image src={mobile} alt='mobile'/>
            
          }
        </Filter>
        <CardText>
          <Title>Get <Span >insights</Span> that help your business grow.</Title>
          <Description>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</Description>
          <Stats>
            <Stat>
              <StatTitle>10k+</StatTitle>
              <StatDescription>companies</StatDescription>
            </Stat>
            <Stat>
              <StatTitle>314</StatTitle>
              <StatDescription>templates</StatDescription>
            </Stat>
            <Stat>
              <StatTitle>12M+</StatTitle>
              <StatDescription>queries</StatDescription>
            </Stat>
          </Stats>
        </CardText>
      </Card>
  </Container>  
  )
}

const Container = styled.div`
background-color: hsl(233, 47%, 7%);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Card = styled.div`
background-color: hsl(244, 38%, 16%);
border-radius: 10px;
width: 22rem;

@media (min-width: 1132px) {
  display: flex;
  width: 70rem;
  flex-direction: row-reverse;
  min-height: 25rem;
}
`
const CardText = styled.div`
@media (min-width: 1132px) {
  padding: 4rem;
  width: 80rem;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 10px 0 0;
filter: opacity(50%) blur(0.2px);

@media (min-width: 1132px) {
  border-radius: 0 10px 10px 0;
}
`
const Filter = styled.div`
position: relative;
width: 100%;
&::before {
  position: absolute;
  width: 100%;
  height: 258.33px;
  top: 0;
  left: 0;
  content: '';
  background-color: hsl(277, 95%, 35%);
  border-radius: 10px 10px 0 0;

  @media (min-width: 1132px) {
    border-radius: 0 10px 10px 0;
    height: 100%;
  }
}
`
const Title = styled.h1`
color: white;
text-align: center;
padding: 2rem 1rem 1rem 1rem;

@media (min-width: 1132px) {
  text-align: left;
  padding: 0 5rem 2rem 2rem;
}
`
const Span = styled.span`
color: hsl(277, 64%, 61%)

`

const Description = styled.p`
color : hsla(0, 0%, 100%, 0.6);
padding: 0 2rem 2rem 2rem;
text-align: center;
line-height: 1.8rem;

@media (min-width: 1132px) {
  text-align: left;
  padding: 0 5rem 2rem 2rem;

}
`

const Stats = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 1rem 3rem 1rem;
gap: 2rem;

@media (min-width: 1132px) {
  flex-direction: row;
  justify-content: space-around;
  padding: 3rem 3rem 0 0;
  gap: 0;
}
`

const Stat = styled.div`
color: hsla(0, 0%, 100%, 0.6);
`

const StatTitle = styled.h2`
color: white;
text-align: center;

@media (min-width: 1132px) {
  text-align: left;
}
`

const StatDescription = styled.p`
margin-top: 0.5rem;
color: hsla(0, 0%, 100%, 0.6);
text-transform: uppercase;
`
export default App
