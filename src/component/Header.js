import React from "react";
import {nav} from 'bootstrap'

const Header = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">fakeshop</a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">ProductListing</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/product/:productId">ProductDetail</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Header;