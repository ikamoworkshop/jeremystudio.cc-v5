import {defineField, defineType} from 'sanity'

export const meta = defineType({
    name: 'meta',
    type: 'object',
    title: 'Metadata',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Meta Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title:' Meta Description'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'OpenGraph Image'
        }),
    ]
})