import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import logo from './logo.svg'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ textDecoration: 'none' }} >
      {props.children}
    </Link>
  </li>


const Header = () => (
  <div className="row" style={{
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    height: '56px',
    alignItems: 'center'
  }}>
    <div style={{ margin: '0 auto' }}>
      <Link to="/" style={{ color: 'black', textDecoration: 'none', }}>
        <img src={logo} style={{
          height: '3rem',
          maxWidth: '100%',
          padding: '3px',
          paddingRight: '6px',
        }} />
      </Link>
      <h1 style={{ margin: 0, fontFamily: 'Roboto, sans', FontWeight: '700', display: 'inline', fontSize: '32px' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none', }}> Barricade Records </Link>
      </h1>
    </div>
    <div className="hideMobile" style={{ float: 'right', margin: '0 auto' }}>
      <nav style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/bands/">Bands</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </nav>
    </div>
  </div>
)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Lato|Roboto:400,700" rel="stylesheet" />
    </Helmet>
    <Header />
    <div className="row">
      <div className="column col-6" className="centerUp" style={{ paddingTop: '16px'}}>
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default TemplateWrapper
