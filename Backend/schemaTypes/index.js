import richText from './richText'
import { projectPage } from './projectPage'
import { galleryPage } from './galleryPage'
import { meta } from './meta'
import { imageWithMeta } from './imageWithMeta'

export const schemaTypes = [
    projectPage,
    galleryPage,
    meta,
    imageWithMeta
]

schemaTypes.push(richText)