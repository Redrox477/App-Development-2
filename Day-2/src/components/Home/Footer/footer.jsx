import React from 'react'
import './footer.css';
import Logo from '../../../assets/images/mainlogo.png';


function Footer() {
  return (
    <footer class="footer">
  <div class="footer__addr">
    <img src={Logo} />
    <div className='footer__addr-in'>
    <h1 class="footer__logo">GiftVibes</h1>    
    <h2>Contact</h2>  
    <address>
      Coimbatore, IN 88258-32253
    </address>
    </div>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Quick Links</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
            
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        <li>
          <a href="#">Digital Signage</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2024 GiftVibes. All rights reserved.</p>
    
  </div>
</footer>
  )
}

export default Footer