import lazyLoader from '../hoc/lazyLoader';

export const CareersLazy = lazyLoader(
  () => import('../Careers')
);
