import './Landingpage1.css'
import AutoSlider from '../../components/AutoSlider'
import Card from '../../components/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const  Cards = [{
  imgurl: '/src/assets/images/card-img.jpg',
  title: 'TechVistara',
  venue: 'Seminar Hall',
  date: '2/19/2024',
  participant1: '/src/assets/images/profile-img1.jpg',
  participant2: '/src/assets/images/profile-img2.jpg',
  participant3: '/src/assets/images/profile-img2.jpg'
 },
 {
  imgurl: '/src/assets/images/card-img.jpg',
  title: 'TechVistara',
  venue: 'Seminar Hall',
  date: '2/19/2024',
  participant1: '/src/assets/images/profile-img1.jpg',
  participant2: '/src/assets/images/profile-img2.jpg',
  participant3: '/src/assets/images/profile-img2.jpg'
 },
 {
  imgurl: '/src/assets/images/card-img.jpg',
  title: 'TechVistara',
  venue: 'Seminar Hall',
  date: '2/19/2024',
  participant1: '/src/assets/images/profile-img1.jpg',
  participant2: '/src/assets/images/profile-img2.jpg',
  participant3: '/src/assets/images/profile-img2.jpg'
 },
{
  imgurl: '/src/assets/images/card-img.jpg',
  title: 'TechVistara',
  venue: 'Seminar Hall',
  date: '2/19/2024',
  participant1: '/src/assets/images/profile-img1.jpg',
  participant2: '/src/assets/images/profile-img2.jpg',
  participant3: '/src/assets/images/profile-img2.jpg'
 }]



function Landingpage1() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='lp1-main'>
      <div className="auto-div">
        <AutoSlider imgurl='/src/assets/images/event1.jpg' title = "TechVistara" description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto sit, debitis doloremque'/>
      </div>

      <div className='cards-main'>
        <Slider {...settings}>
          {Cards.map((card) => {
            return <Card imgurl={card.imgurl} title={card.title} venue={card.venue} date={card.date} participants={[card.participant1, card.participant2, card.participant3]} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Landingpage1