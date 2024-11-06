import React from 'react'
import { Navber } from './Navber'
import img8 from "../image/product_list_1.png"
import img9 from "../image/product_list_2.png"
import img10 from "../image/product_list_3.png"
import img11 from "../image/product_list_4.png"
import img12 from "../image/product_list_5.png"
import img13 from "../image/product_list_6.png"
import img14 from "../image/product_list_7.png"
import img15 from "../image/product_list_8.png"
import img16 from "../image/product_list_9.png"

export const Product = () => {
  return (
    <>
      <Navber />
      <header>
        <div className="hea-b">
          <h1>PRODUCT</h1>
        </div>
      </header>
      <section>
        <div className="sec-f">
          <input type="text" /><i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="sec-g">
          <div className="sec-g-one">
            <div className="sec-g-top">
              <img src={img8} alt="" />
            </div>
            <div className="sec-g-bottam">
              <h2>Cervical pillow for airplane car office nap pillow
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-g-two">
            <div className="sec-g-top">
              <img src={img9} alt="" />
            </div>
            <div className="sec-g-bottam">
              <h2>Geometric striped flower home classy decor
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-g-three">
            <div className="sec-g-top">
              <img src={img10} alt="" />
            </div>
            <div className="sec-g-bottam">
              <h2>Foam filling cotton slow rebound pillows
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="sec-h">
          <div className="sec-h-one">
            <div className="sec-h-top">
              <img src={img11} alt="" />
            </div>
            <div className="sec-h-bottam">
              <h2>Memory foam filling cotton Slow rebound pillows
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-h-two">
            <div className="sec-h-top">
              <img src={img12} alt="" />
            </div>
            <div className="sec-h-bottam">
              <h2>Memory foam filling cotton Slow rebound pillows
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-h-three">
            <div className="sec-h-top">
              <img src={img13} alt="" />
            </div>
            <div className="sec-h-bottam">
              <h2>Sleeping orthopedic sciatica Back Hip Joint Pain relief
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="sec-j">
          <div className="sec-j-one">
            <div className="sec-j-top">
              <img src={img14} alt="" />
            </div>
            <div className="sec-j-bottam">
              <h2>Memory foam filling cotton Slow rebound pillows
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-j-two">
            <div className="sec-j-top">
              <img src={img15} alt="" />
            </div>
            <div className="sec-j-bottam">
              <h2>Sleeping orthopedic sciatica Back Hip Joint Pain relief
              </h2>
              <button>Buy Now</button>
            </div>
          </div>
          <div className="sec-j-three">
            <div className="sec-j-top">
              <img src={img16} alt="" />
            </div>
            <div className="sec-j-bottam">
              <h2>Geometric striped flower home classy decor
              </h2>
              <button>Buy Now</button>
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
