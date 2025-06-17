
export const getStartupsQuery = (search?: string | null) => {
  const filter = search && search.trim()
    ? `&& (
        title match "*${search}*" ||
        category match "*${search}*" ||
        author->name match "*${search}*"
      )`
    : "";

  return `
    *[_type == "startup" && defined(slug.current) ${filter}] | order(_createdAt desc){
      _id, title, slug, _createdAt,
      author -> {
        _id, name, image, bio
      },
      views,
      description,
      category,
      image
    }
  `;
};

export const STARTUP_BY_ID_QUERY = `
  *[_type == "startup" && _id == $id][0] {
    _id, title, slug, _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
`;

export const STARTUP_VIEW_BY_ID_QUERY = `
  *[_type == "startup" && _id == $id][0] {
    views,
  }
`;