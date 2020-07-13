import React from 'react'
import PropTypes from 'prop-types'
import { BoutiquePageTemplate } from '../../templates/boutique-page'

const BoutiquePagePreview = ({ entry, widgetFor }) => (
  <BoutiquePageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
  />
)

BoutiquePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default BoutiquePagePreview

