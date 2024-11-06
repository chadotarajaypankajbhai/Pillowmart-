import React from 'react'
import { Navber } from './Navber'
import img1 from "../image/banner.png"
import img2 from "../image/single_product_1.png"
import img3 from "../image/single_product_3.png"


export const Home = () => {
  return (
    <>
      <Navber />
      <header>
        <div className="hea-a">
          <div className="hea-a-left">
            <h1>Best quality Pillow</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aut quam quo itaque nesciunt explicabo.</p>
            <button>Shop Now</button>
          </div>
          <div className="hea-a-right">
            <img src={img1} alt="" />
          </div>
        </div>
      </header>
      <section>
        <div className="sec-a">
          <div className="sec-a-left">
            <img src={img2} alt="" />
          </div>
          <div className="sec-a-right">
            <p>Started from $10</p>
            <h2>Printed memory foam brief modern throw pillow case</h2>
            <button>EXPLORE NOW</button>
          </div>
        </div>
        <div className="sec-b">
          <div className="sec-b-left">
            <p>Started from $10</p>
            <h2>Printed memory foam brief modern throw pillow case</h2>
            <button>EXPLORE NOW</button>
          </div>
          <div className="sec-b-right">
            <img src={img3} alt="" />
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
