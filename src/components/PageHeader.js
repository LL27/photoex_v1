import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PageHeader = ({ image, title }) => (
  <div className="columns is-multiline">

     <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`, borderBottom: '1rem solid hsl(0, 0%, 86%)'
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem rgb(233, 107, 103)",
          padding: "1rem",
          paddingLeft: "3rem",
          backgroundColor: "hsl(0, 0%, 96%)",
          opacity: .9


        }}
      >
        {title}
      </h2>
    </div>
  </div>

)

PageHeader.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

export default PageHeader
