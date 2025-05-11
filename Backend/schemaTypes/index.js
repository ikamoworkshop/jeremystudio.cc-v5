import richText from './richText'
import { page } from './page'
import { meta } from './meta'
import { imageWithMeta } from './imageWithMeta'

export const schemaTypes = [
    page,
    meta,
    imageWithMeta
]

schemaTypes.push(richText)