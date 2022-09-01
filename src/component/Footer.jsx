import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='row m-0 p-0'>
        <div className='col-md-4 footer-div'>
            <h2>ABOUT THE SHOP</h2>
            <p>Atsuko is a retail experience created for fans of all things Japanese lifestyle and culture. We carry exclusive officially licensed apparel, accessories, and more.</p>
            <p>The store is run by our namesake herself, Atsuko, and her fuzzy little companion, Nuki. They're here to make sure you feel welcome and find everything you're looking for.</p>
        </div>
        <div className='col-md-4 footer-div'>
            <h2>HELPFUL LINKS</h2>
            <ul className='p-0'>
                <li>Sign In</li>
                <li>Earn Rewards</li>
                <li>Refer a Freind</li>
                <li>Gift Cards</li>
                <li>News</li>
                <li>About Atsuko</li>
            </ul>
        </div>
        <div className='col-md-4 footer-div'>
            <h2>CUSTOMER SERVICE</h2>
            <ul className='p-0'>
            <li>FAQ's</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Returns & Exchange Policy</li>
            <li>Order Tracking</li>
            <li>Requests Returns or Exchanges</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
