import lazyLoader from '../hoc/lazyLoader';

export const ServicesLazy = lazyLoader(
  () => import('../Services')
);
