import protectedExtensions from './protectedExtensions';

// eslint-disable-next-line consistent-return
const fetchTest = async (url) => {
  const start = performance.now();
  try {
    await fetch(url);
  } catch (e) {
    return performance.now() - start;
  }
};

const getFetchTime = async (url, testUrl) => {
  const isTimeGreater = [];
  for (let i = 0; i < 200; i++) {
    const time = await fetchTest(url);
    const testTime = await fetchTest(testUrl);

    isTimeGreater.push(time > testTime);
  }

  return isTimeGreater.filter(Boolean).length;
};

const testURLS = async (name, extension) => {
  const url = `chrome-extension://${extension.id}/${extension.file}`;
  const testUrl = `chrome-extension://pmlfbbehleledmbphnielafhieceggal/${extension.file}`;

  const timeTest = await getFetchTime(url, testUrl);

  if (timeTest / 200 > 0.66) {
    return { name, detected: true, id: extension.id };
  }
  return { name, detected: false, id: extension.id };
};

const checkProtectedExtensions = async () => {
  const checkedArr = [];

  for (let i = 0; i < Object.keys(protectedExtensions).length; i++) {
    const obj = Object.keys(protectedExtensions)[i];
    checkedArr.push(await testURLS(obj, protectedExtensions[obj]));
  }

  return checkedArr;
};

export default checkProtectedExtensions;
