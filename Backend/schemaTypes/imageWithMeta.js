import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const imageWithMeta = defineType({
    title: 'Image',
    name: 'imageWithMeta',
    type: 'image',
    icon: ImagesIcon,
    options: {
        metadata: ['palette'],
        hotspot: true
    },
    fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alt Text'
        }),
        defineField({
            name: 'caption',
            type: 'richText',
            title: 'Caption'
        })
    ],
    preview: {
        select: {
            alt: 'alt',
            caption: 'caption'
        },
        prepare: ({ title }) => {
            return {
                title: title,
                subtitle: 'Image with Meta',
                media: ImagesIcon
            }
        }
    }
})