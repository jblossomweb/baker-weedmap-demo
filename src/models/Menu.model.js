import truncate from 'truncate';
import map from 'lodash/map';
import each from 'lodash/each';
// import keys from 'lodash/keys';
import remove from 'lodash/remove';
import values from 'lodash/values';
import PropTypes from 'prop-types';

export default {
  propTypes: {
    menu: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
      html: PropTypes.string,
      image: PropTypes.string,
      categoryId: PropTypes.number,
      price: PropTypes.shape({
        halfGram: PropTypes.number,
        gram: PropTypes.number,
        twoGrams: PropTypes.number,
        eight: PropTypes.number,
        quarter: PropTypes.number,
        half: PropTypes.number,
        ounce: PropTypes.number,
        unit: PropTypes.number,
      }),
      lowestPrice: PropTypes.number,
      featured: PropTypes.bool,
      published: PropTypes.bool,
      created: PropTypes.string, // TODO moment() when needed
      updated: PropTypes.string,
      deleted: PropTypes.string,
    })),
    categories: PropTypes.objectOf(PropTypes.string),
  },
  defaultProps: {
    menu: [
      {
        name: '',
        slug: '',
        description: '',
        html: '',
        image: '',
        categoryId: 0,
        price: {
          halfGram: 0,
          gram: 0,
          twoGrams: 0,
          eight: 0,
          quarter: 0,
          half: 0,
          ounce: 0,
          unit: 0,
        },
        lowestPrice: 0,
        featured: false,
        published: false,
        created: '',
        updated: '',
        deleted: '',
      },
    ],
    categories: {},
  },
  map: (raw, categories) => map(raw, (item) => {
    const norml = {
      name: truncate(item.name, 30),
      slug: item.slug,
      description: truncate(item.body, 100),
      html: item.body_html,
      image: item.image,
      categoryId: item.menu_item_category_id,
      categoryName: categories ? categories[item.menu_item_category_id] : 'Other',
      price: {
        halfGram: item.price_half_gram,
        gram: item.price_gram,
        twoGrams: item.price_two_grams,
        eight: item.price_eighth,
        quarter: item.price_quarter,
        half: item.price_half_ounce,
        ounce: item.price_ounce,
        unit: item.price_unit,
      },
      featured: item.featured,
      published: item.published,
      created: item.created_at,
      updated: item.updated_at,
      deleted: item.deleted_at,
    };
    const prices = values(norml.price);
    remove(prices, value => (value === 0));
    // const weights = keys(norml.price);
    norml.lowestPrice = Math.min(...prices);

    return norml;
  }),
  mapCategories: (raw) => {
    const keyedObject = { 0: 'Other' };
    each(raw, (category) => {
      keyedObject[category.id] = category.name;
    });
    return keyedObject;
  },
};
