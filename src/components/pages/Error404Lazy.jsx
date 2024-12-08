import lazyLoader from '../hoc/lazyLoader';

export const Error404Lazy = lazyLoader(
  () => import('../Error404')
);
