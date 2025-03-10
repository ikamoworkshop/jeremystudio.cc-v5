import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'jeremystudio.cc-v5',

  projectId: 'h2ngqbon',
  dataset: 'jeremystudio-v5',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
