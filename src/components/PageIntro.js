import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PageIntro = ({ intro }) => (
  <div>

    {intro.map((item) => (
      <section key={item.title} className="section">
        <div className="container">
          <div className="section">

        <div className="columns">
          <div className="column is-7">
             <div className="image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="column is-5">
                <div className="content">
                 <p className="title is-size-4-mobile is-size-6-tablet is-size-5-desktop is-size-4-widescreen">{item.title}</p>
                  <p className="subtitle" style={{fontSize: '14px'}}>{item.text}</p>
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
