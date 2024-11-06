import React from 'react'
import { Navber } from './Navber'
import img4  from "../image/1.svg"
import img5  from "../image/2.svg"
import img6  from "../image/3.svg"
import img7  from "../image/4.svg"

export const About = () => {
  return (
    <>
    <Navber/>
    <header>
      <div className="hea-b">
  <h1>ABOUT</h1>
      </div>
    </header>
    <section>
      <div className="warpper">
        <div className="sec-c">
          <h3>Our Mission</h3>
          <h2>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</h2>
        </div>
        <div className="sec-d">
        <iframe src="https://www.youtube.com/embed/3omvxDaGoWY?si=w-_Y2bQPXg2E6wcr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="sec-e">
          <div className="sec-e-one">
            <img src={img4} alt="" />
            <h2>Credit Card Support</h2>
          </div>
          <div className="sec-e-two">
          <img src={img5} alt="" />
          <h2>Online Order</h2>
          </div>
          <div className="sec-e-three">
          <img src={img6} alt="" />
          <h2>Free Delivery</h2>
          </div>
          <div className="sec-e-four">
          <img src={img7} alt="" />
          <h2>Product with Gift</h2>
          </div>
        </div>
      </div>
    </section>
    <footer>
        <div className="foo-a">
          <h1>Get promotions & updates!</h1>
          <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
          <input type="email" placeholder='ENTER YOUR EMAIL' />
         <button>SUBSCRIBE</button>
        </div>
      </footer>
    </>
  )
}
