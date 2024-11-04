import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import char from '../images/default-avatar.png';


export default function Feedback() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSlidesPerView(3);
    }else if (window.innerWidth >= 768) {
      setSlidesPerView(2);
    }
     else if (window.innerWidth >= 480) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(1);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial slidesPerView on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const rating=5;
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="reviews">
                <div className="feedbacks">
                <img src={char} alt="" />
            <div>
                <h1>John Cena</h1>
                <p>Location Here</p>
            </div>
            </div>
            <p className='review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolore recusandae. Sint, deleniti rem. Dolore consequuntur optio aliquam atque, omnis non sint natus voluptatem, reprehenderit saepe cum eos perferendis harum.</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <FontAwesomeIcon
                  key={starIndex}
                  icon={starIndex <= rating ? faStar : faStar}
                  style={{ color: '#ffc800', margin: '0 4px' }}
                />
              ))}
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
