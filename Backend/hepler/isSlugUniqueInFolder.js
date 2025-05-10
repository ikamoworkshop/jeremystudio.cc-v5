import { DEFAULT_STUDIO_CLIENT_OPTIONS } from "sanity";

export function isSlugUniqueInFolder(slug, context) {
    const { document, getClient } = context
    if (!document) return false;

    const client = getClient(DEFAULT_STUDIO_CLIENT_OPTIONS)

    const page = document
    const id = page._id.replace(/^drafts\./, '')
    const params = {
        draft: `draft.${id}`,
        published: id,
        parent: page.parent?._ref || null,
        slug,
        type: document._type,
    }

    const query = `defined(*[
    !(_id in [$draft, $published]) &&
    _type == $type &&
    parent._ref == $parent &&
    slug.current == $slug
    ][0]._id)`

    return client.fetch(query, params)
}