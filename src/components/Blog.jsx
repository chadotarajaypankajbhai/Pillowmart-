import React from 'react'
import { Navber } from './Navber'
import img17 from "../image/single_blog_1.png"
import img18 from "../image/single_blog_2.png"
import img19 from "../image/single_blog_3.png"
import img20 from "../image/single_blog_4.png"
import img21 from "../image/single_blog_5.png"

export const Blog = () => {
  return (
    <>
      <Navber />
      <header>
        <div className="hea-b">
          <h1>BOLG US</h1>
        </div>
      </header>
      <section>
        <div className="warpper">
          <div className="sec-m">
            <div className="sec-m-top">
              <img src={img17} alt="" />
              <h1>15 JAN</h1>
            </div>
            <div className="sec-m-bot">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
            </div>
          </div>
          <div className="sec-n">
            <div className="sec-n-top">
              <img src={img18} alt="" />
              <h1>15 JAN</h1>
            </div>
            <div className="sec-n-bot">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
            </div>
          </div>

          <div className="sec-n">
            <div className="sec-n-top">
              <img src={img19} alt="" />
              <h1>15 JAN</h1>
            </div>
            <div className="sec-n-bot">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
            </div>
          </div>

          <div className="sec-n">
            <div className="sec-n-top">
              <img src={img20} alt="" />
              <h1>15 JAN</h1>
            </div>
            <div className="sec-n-bot">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
            </div>
          </div>

          <div className="sec-n">
            <div className="sec-n-top">
              <img src={img21} alt="" />
              <h1>15 JAN</h1>
            </div>
            <div className="sec-n-bot">
              <h2>Google inks pact for new 35-storey office</h2>
              <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
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
