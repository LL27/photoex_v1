import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">

    {gridItems.map((item) => (
      <div key={item.title} className="column is-4">

        <div className="card">
            <div className="card-image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="card-content" style={{height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Link to={item.path} className="title is-size-4-mobile is-size-6-tablet is-size-4-desktop" style={{marginBottom:'.5rem'}}>{item.title}</Link>
            <p className="subheading">{item.text}</p>
            </div>

        </div>
      </div>
    ))}
  </div>

)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
