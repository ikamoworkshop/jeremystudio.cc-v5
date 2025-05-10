import blockContent from './blockContent'
import page from './page'
import { meta } from './meta'

export const schemaTypes = [
    page,
    meta
]

schemaTypes.push(blockContent)