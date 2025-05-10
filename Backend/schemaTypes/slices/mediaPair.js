import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const mediaPair = defineType({
    name: 'mediaPair',
    type: 'object', 
    title: 'Media Pair',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'caption',
            type: 'string',
            title: 'Caption',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        })
    ], 
    preview: {
        select: {
            title: 'caption'
        },
        prepare: ({ title }) => {
            return {
                title: title,
                subtitle: 'Media Pair',
                media: ImagesIcon
            }
        }
    },
})