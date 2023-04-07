import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'DOCUMENT STORAGE',
  'HOUSEHOLD STORAGE',
  'AUTOMOBILE STORAGE',
  'BUSINESS STORAGE',
  'BOX STORAGE',

];


// ----------------------------------------------------------------------

const products = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
  };
});

export default products;
