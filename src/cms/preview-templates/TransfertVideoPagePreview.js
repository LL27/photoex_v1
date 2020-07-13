import React from 'react'
import PropTypes from 'prop-types'
import { TransfertVideoPageTemplate } from '../../templates/transfertvideo-page'

const TransfertVideoPagePreview = ({ getAsset, entry, widgetFor }) => (
  <TransfertVideoPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
  />
)

TransfertVideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default TransfertVideoPagePreview

