import React from 'react'
import PropTypes from 'prop-types'
import { EncadrementPageTemplate } from '../../templates/encadrement-page'

const EncadrementPagePreview = ({ getAsset, entry, widgetFor }) => (
  <EncadrementPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
  />
)

EncadrementPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default EncadrementPagePreview

