let timeoutId = 0;
export const debounce = (func, interval) => {
  return () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, interval);
  };
};

/**
 * 渡されたURLからページ名を抜き出す
 * next/router はbasePathを省いてくれるが、単純なURLで渡される場合も考慮してbasePathを省く処理も入れる
 * TOPの場合は「index」を返す
 */
export const getPageName = (path) => {
  // モードがパラメータでついている場合があるのでそれを取り除く
  const urlWithoutParams = path.split('?')[0];

  // basePathも取り除く
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const urlWithoutBasePath = urlWithoutParams.replace(basePath, '');

  // 先頭に残ったスラッシュを取り除き（slice(1))、
  //さらに下層ページがある場合も考慮してスラッシュで分けた先頭をページ名とする
  const pageName = urlWithoutBasePath.slice(1).split('/')[0];

  // TOPの場合は何もなくなるので、「index」を返す
  return pageName || 'index';
};
