import {defineField, defineType} from 'sanity'
import { isSlugUniqueInFolder } from '../hepler/isSlugUniqueInFolder'

export const galleryPage = defineType({
    name: 'galleryPage',
    type: 'document',
    title: 'Gallery Page',
    fields: [
        defineField({
            title: 'Page Meta Tags',
            name: 'meta',
            type: 'meta',
            options: {
                collapsible: true,
                collapsed: false,
            },
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The full title of the page, for display in the page header.'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200,
                isUnique: isSlugUniqueInFolder,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'thumbnail',
            type: 'imageWithMeta',
            title: 'Thumbanil'
        }),
        defineField({
            name: 'date',
            type: 'date',
            title: 'Date'
        }),
        defineField({
            name: 'photoList',
            type: 'array',
            title: 'Photo List',
            of: [
                {
                    type: 'imageWithMeta'
                }
            ],
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare: ({title}) => {
            return{
                title: title,
                subtitle: 'Page'
            }
        }
    }
})