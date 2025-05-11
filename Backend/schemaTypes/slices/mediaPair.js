import {defineField, defineType} from 'sanity'
import {PanelLeftIcon} from '@sanity/icons'

export const mediaPair = defineType({
    name: 'mediaPair',
    type: 'object', 
    title: 'Media Pair',
    icon: PanelLeftIcon,
    fields: [
        defineField({
            name: 'caption',
            type: 'string',
            title: 'Caption',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'imageWithMeta',
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
                media: PanelLeftIcon
            }
        }
    },
})