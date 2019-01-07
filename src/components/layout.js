import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div
    style={{
      maxWidth: '760px',
      paddingBottom: '10vh',
      margin: 'auto'
  }}
  >
        <Header />
          {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
