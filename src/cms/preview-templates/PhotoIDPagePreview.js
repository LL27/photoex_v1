import React from 'react'
import PropTypes from 'prop-types'
import { PhotoIDPageTemplate } from '../../templates/photoID-page'

const PhotoIDPagePreview = ({getAsset, entry, getAsset }) => {
  const entryFormats = entry.getIn(['data', 'main', 'formats'])
  const formats = entryFormats ? entryFormats.toJS() : []

  return (
    <PhotoIDPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        formats
        }}
    />
  )
}

PhotoIDPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PhotoIDPagePreview
