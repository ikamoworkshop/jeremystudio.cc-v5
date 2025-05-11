import {defineField, defineType} from 'sanity'
import { isSlugUniqueInFolder } from '../hepler/isSlugUniqueInFolder'
import { slices } from './slices'

export const projectPage = defineType({
    name: 'projectPage',
    type: 'document',
    title: 'Project Page',
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
            name: 'slices',
            type: 'array',
            title: 'Content Slices',
            of: slices,
            options: {
                sliceSelector: true
            }
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