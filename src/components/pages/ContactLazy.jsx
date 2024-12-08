import lazyLoader from '../hoc/lazyLoader';

export const ContactLazy = lazyLoader(
  () => import('../Contact')
);
