import { useGlobalHeaderContext } from '~/context/GlobalHeaderContext';

export const useAnchorScroll = () => {
  const { globalHeaderRef } = useGlobalHeaderContext();

  const scrollTo = ({ target, behavior = 'auto' }) => {
    const targetTop = target.getBoundingClientRect().top + window.scrollY || 0;
    const headerOffset = globalHeaderRef.current?.clientHeight || 0;

    window.scrollTo({
      top: targetTop - headerOffset,
      behavior,
    });
  };

  return scrollTo;
};
