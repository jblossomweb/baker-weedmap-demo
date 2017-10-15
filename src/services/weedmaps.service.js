import map from 'lodash/map';
import proxy from './proxy.service';

const webBase = 'https://weedmaps.com/';
const apiV2 = 'https://api-v2.weedmaps.com/api/v2/';

// eslint-disable-next-line no-console
const errorHandler = console.error;

const WeedmapsService = {
  getCategories: () => proxy.get(`${apiV2}brands/categories?include%5B%5D=categories`)
    .then(({ data }) => data.categories, errorHandler),

  getMenu: dispensarySlug => proxy
    .get(`${webBase}dispensaries/${dispensarySlug}/menu_items.json`),

  getDispensariesByCity: citySlug => proxy.get(`${apiV2}location?include%5B%5D=regions.listings&region_slug=${citySlug}`)
    .then(({ data }) => map(data.regions.dispensary.listings, listing => ({
      // TODO: use a Dispensary model to decouple this mapping from service (see Menu)
      name: listing.name,
      slug: listing.slug,
      city: listing.city,
      state: listing.state,
      avatar: listing.avatar_image.small_url,
    })), errorHandler),
};

export default WeedmapsService;
