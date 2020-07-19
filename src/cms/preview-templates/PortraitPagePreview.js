import React from 'react'
import PropTypes from 'prop-types'
import { PortraitPageTemplate } from '../../templates/portrait-page'

const PortraitPagePreview = ({ getAsset, entry, widgetFor }) => (

  <PortraitPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    intro={entry.getIn(['data']).toJS().intro || { blurbs: [] }}
    content={widgetFor('body')}
  />
)

PortraitPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default PortraitPagePreview
