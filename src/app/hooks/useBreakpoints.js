import { useEffect, useState } from 'react';

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

const useBreakpoint = () => {
  const [matches, setMatches] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  useEffect(() => {
    const mediaQueryLists = Object.keys(breakpoints).reduce((acc, key) => {
      acc[key] = window.matchMedia(breakpoints[key]);
      return acc;
    }, {});

    const updateMatches = () => {
      setMatches(
        Object.keys(breakpoints).reduce((acc, key) => {
          acc[key] = mediaQueryLists[key].matches;
          return acc;
        }, {})
      );
    };

    updateMatches();

    Object.values(mediaQueryLists).forEach((mql) =>
      mql.addEventListener('change', updateMatches)
    );

    return () =>
      Object.values(mediaQueryLists).forEach((mql) =>
        mql.removeEventListener('change', updateMatches)
      );
  }, []);

  return matches;
};

export default useBreakpoint;
