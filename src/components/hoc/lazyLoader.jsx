import { ReactElement, Suspense, lazy, useEffect, useState } from 'react';
import { Loader } from '@mantine/core';

/**
 * Wraps React's lazy and Suspense features to show a loading indicator
 * as components stored in external chunks load in with a delay.
 *
 * @param  {Function} callback Func which must return an `import()` to be passed
 *                             in to React.lazy
 * @param  {ReactElement} fallback Component to act as a fallback while lazy component is being loaded
 * @param  {number} delay Time in milliseconds before displaying the lazy-loaded component
 */
export default function lazyLoader(callback, fallback = <Loader color="gray" />, delay = 1000) {
  const Component = lazy(callback);

  return function LazyComponent(props) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, delay);

      return () => clearTimeout(timer); // Clean up timeout
    }, [delay]);

    if (!isReady) {
      return fallback;
    }

    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
