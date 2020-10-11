import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PageIntro = ({ intro }) => (
  <div>

    {intro.map((item) => (
      <section key={item.title} className="section" style={{paddingBottom: 0, paddingTop: 0, borderBottom: ".25rem solid hsl(0, 0%, 86%)"  }}>
        <div className="container">
          <div className="section">

        <div className="columns is-vcentered">

          <div className="column is-half">

             <div className="image container">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="column is-half">
                <div className="content">
                 <p className="is-size-4-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen">{item.title}</p>
                  <p className="" style={{fontSize: '14px'}}>{item.text}</p>
            </div>
          </div>
        </div>
        </div>
          </div>
      </section>
    ))}
  </div>

)

PageIntro.propTypes = {
  intro: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default PageIntro
