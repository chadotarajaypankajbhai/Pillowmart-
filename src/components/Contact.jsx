import React from 'react'
import { Navber } from './Navber'

export const Contact = () => {
  return (
    <>
      <Navber />
      <header>
        <div className="hea-b">
          <h1>CONTACT US </h1>
        </div>
      </header>
      <section>
        <div className="warpper">
          <div className="sec-s">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842625824!2d72.41492689163259!3d23.02047410311559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729433218588!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="sec-r">
            <div className="sec-r-left">
              <textarea name="text" id="" placeholder='Enter Message'></textarea><br />
              <input type="text" placeholder='Enter Your Name' />
              <input type="email" name="" id="" placeholder='Enter Email' /><br />
              <button>SEND MESSAGE</button>
            </div>
            <div className="sec-r-right">
              <div className="sec-t">
                <div className="sec-t-left">
                  <i class="fa-solid fa-house"></i>
                </div>
                <div className="sec-t-right">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>

              <div className="sec-t">
                <div className="sec-t-left">
                <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div className="sec-t-right">
                  <h3>00 (440) 9865 562.</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="sec-t">
                <div className="sec-t-left">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="sec-t-right">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
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
