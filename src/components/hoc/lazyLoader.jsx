import { ReactElement, Suspense, lazy } from 'react';

import { Loader } from '@mantine/core';

/**
 * Wraps React's lazy and Suspense features to show a loading indicator
 * as components stored in external chunks load in.
 *
 * @see  https://reactjs.org/docs/code-splitting.html#reactlazy
 *
 * @param  {Function} callback Func which must return an `import()` to be passed
 *                             in to React.lazy
 * @param  {ReactElement} fallback Component which will act as a fallback while lazy component is being loaded
 */
export default function lazyLoader(callback, fallback = <Loader />) {
  const Component = lazy(callback);

  return function LazyComponent(props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
