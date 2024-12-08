import lazyLoader from '../hoc/lazyLoader';

export const AboutLazy = lazyLoader(
  () => import('../About')
);
