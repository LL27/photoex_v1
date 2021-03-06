import React from 'react'
import PropTypes from 'prop-types'
import { LaboPageTemplate } from '../../templates/labo-page'

const LaboPagePreview = ({ getAsset, entry, widgetFor }) => (

  <LaboPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    intro={ entry.getIn(['data']).toJS().intro || { blurbs: [] }}
    content={widgetFor('body')}
  />
)

LaboPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default LaboPagePreview
