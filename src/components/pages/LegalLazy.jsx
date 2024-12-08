import lazyLoader from '../hoc/lazyLoader';

export const LegalLazy = lazyLoader(
  () => import('../Legal')
);
