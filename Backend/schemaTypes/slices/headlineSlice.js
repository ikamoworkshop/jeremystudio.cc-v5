import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const headlineSlice = defineType({
    name: 'headlineSlice',
    type: 'object', 
    title: 'Headline Slice',
    icon: BlockContentIcon,
    fields: [
        defineField({
            name: 'subheadline',
            type: 'string',
            title: 'Subheadline',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'headeline',
            type: 'string',
            title: 'Headeline'
        })
    ], 
    preview: {
        select: {
            title: 'subheadline'
        },
        prepare: ({ title }) => {
            return {
                title: title,
                subtitle: 'Headline Slice',
                media: BlockContentIcon
            }
        }
    },
})