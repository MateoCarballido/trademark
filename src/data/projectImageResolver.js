const galleryImageModules = import.meta.glob('../assets/fotos trade/*.{png,jpg,jpeg,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});

const galleryImageMap = Object.entries(galleryImageModules).reduce((images, [path, url]) => {
  const fileName = path.split('/').pop();

  if (fileName) {
    images[fileName] = url;
  }

  images[path] = url;
  return images;
}, {});

export function resolveProjectImage(image) {
  if (typeof image !== 'string') {
    return image;
  }

  const normalized = image.trim().replace(/^\.\//, '').replace(/^\/+/, '');

  if (!normalized) {
    return null;
  }

  const fileName = normalized.split('/').pop();

  return (
    galleryImageMap[normalized] ??
    galleryImageMap[`../assets/fotos trade/${normalized}`] ??
    galleryImageMap[fileName] ??
    image
  );
}

export function resolveProjectsImages(projects) {
  return projects.map((project) => ({
    ...project,
    image: resolveProjectImage(project.image),
    images: (project.images ?? []).map(resolveProjectImage).filter(Boolean),
  }));
}
