import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


  // core version + navigation, pagination modules:
  import { Pagination } from 'swiper';
  // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/pagination';


const Testimonials = () => {

const data = [
  {
    avatar:AVTR1,
    name: 'Tina snow',
    review:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, soluta.'
  },
  {
    avatar:AVTR2,
    name: 'Shatta Wale',
    review:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, soluta.'
  },
  {
    avatar:AVTR3,
    name: 'Kwame Despite',
    review:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, soluta.'
  },
  {
    avatar:AVTR4,
    name: 'Tina snow',
    review:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, soluta.'
  }
]

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
        pagination={{clickable:true}}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>

          <h5 className='clien__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials