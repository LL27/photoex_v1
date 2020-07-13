import React from 'react'
import PropTypes from 'prop-types'
import { StudioPageTemplate } from '../../templates/studio-page'

const StudioPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <StudioPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        description={data.description}
        studioIntro={data.studioIntro || { blurbs: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

StudioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StudioPagePreview
