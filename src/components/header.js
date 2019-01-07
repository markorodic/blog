import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div
    style={{
      borderRight: '2px dashed #eee',
      position: 'fixed',
      width: '240px',
      height: '100%',
      paddingRight: '30px',
      paddingLeft: '30px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right',
      top: '0px',
    }}
  >
          <h1
            style={{
              marginBottom: 0
            }}
          >
            Marko Rodic
          </h1>
          <p>A simple blog detailing my projects during RC</p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
