import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import StudioPagePreview from './preview-templates/StudioPagePreview'
import PhotoIDPagePreview from './preview-templates/PhotoIDPagePreview'
import PortraitPagePreview from './preview-templates/PortraitPagePreview'
import LaboPagePreview from './preview-templates/LaboPagePreview'
import EncadrementPagePreview from './preview-templates/EncadrementPagePreview'
import TransfertVideoPagePreview from './preview-templates/TransfertVideoPagePreview'
import BoutiquePagePreview from './preview-templates/BoutiquePagePreview'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('studio', StudioPagePreview)
CMS.registerPreviewTemplate('photoID', PhotoIDPagePreview)
CMS.registerPreviewTemplate('portrait', PortraitPagePreview)
CMS.registerPreviewTemplate('labo', LaboPagePreview)
CMS.registerPreviewTemplate('encadrement', EncadrementPagePreview)
CMS.registerPreviewTemplate('transfertvideo', TransfertVideoPagePreview)
CMS.registerPreviewTemplate('boutique', BoutiquePagePreview)
