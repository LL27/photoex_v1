import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar2 = class extends React.Component {

  render() {
    return ( <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </Link>

    <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </Link>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link class="navbar-item">
        Home
      </Link>

      <Link class="navbar-item">
        Documentation
      </Link>

      <div class="navbar-item has-dropdown is-hoverable">
        <Link class="navbar-link">
          More
        </Link>

        <div class="navbar-dropdown">
          <Link class="navbar-item">
            About
          </Link>
          <Link class="navbar-item">
            Jobs
          </Link>
          <Link class="navbar-item">
            Contact
          </Link>
          <hr class="navbar-divider"/>
          <Link class="navbar-item">
            Report an issue
          </Link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link class="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link class="button is-light">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
  }
}

export default Navbar2
