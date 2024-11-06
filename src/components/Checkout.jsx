import React from 'react'
import { Navber } from './Navber'

export const Checkout = () => {
  return (
    <>
      <Navber />
      <header>
        <div className="hea-b">
          <h1>CHECKOUT</h1>
        </div>
      </header>
      <section>
        <div className="warpper">
          <div className="sec-k">
            <h3>Returning Customer?<a href="">Click here to login</a></h3>
          </div>
          <div className="sec-k-one">
            <h3>if you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</h3>
          </div>
          <div className="sec-k-two">
            <input type="email" placeholder='ENTER YOUR EMAIL' />
            <input type="password" placeholder='PASSWORD' />
          </div>
          <div className="sec-k-three">
            <button>LOG IN</button>
            <input type="checkbox" />
            <p> Remember me</p>
          </div>
          <div className="sec-k-four">
            <h3>Have a coupon? <a href=""> Click here to enter your code</a> </h3>
          </div>
          <div className="sec-k-five">
            <input type="text" placeholder='ENTER COUPON CODE' /><br />
            <button>Apply Coupon</button>
          </div>
          <h1>Billing Details</h1>
          <div className="sec-k-six">
            <form>
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' /> <br />
              <input type="number" placeholder='Phone Number' />
              <input type="email" placeholder='Email Address' />
              <select>
                <option>  india </option>
                <option>   usa  </option>
                <option>  jambu </option>
                <option>  uk </option>
                <option>  canada </option>
                <option>  America </option>
                <option>  Russia </option>
              </select>
            </form>
          </div>
          <div className="sec-k-seven">
            <input type="text" placeholder='Address Line 01*' /><br />
            <input type="text" placeholder='Address Line 02*' /><br />
            <input type="text" placeholder='Town/City' />
          </div>
          <h1>Shipping Details</h1>
          <div className="sec-k-ten">
            <textarea name="text" id="" placeholder='Order Notes.'></textarea>
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
