import lazyLoader from '../hoc/lazyLoader';

export const HomeLazy = lazyLoader(
  () => import('../Home')
);
