import './Landingpage1.css'
import AutoSlider from '../../components/AutoSlider'
import Card from '../../components/Card'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


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
  return (
    <div className='lp1-main'>
      <div className="auto-div">
        <AutoSlider imgurl='/src/assets/images/event1.jpg' title = "TechVistara" description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto sit, debitis doloremque'/>
      </div>

      <div className='cards-main'>
        <ScrollMenu>
          {Cards.map((card) => {
            return <Card imgurl={card.imgurl} title={card.title} venue={card.venue} date={card.date} participants={[card.participant1, card.participant2, card.participant3]} />
          })}
        </ScrollMenu>
      </div>
    </div>
  )
}

export default Landingpage1