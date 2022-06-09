import extensions from './extensions';

const checkMetaMask = () => {
  if (typeof window.ethereum !== 'undefined' && !navigator.brave) {
    return true;
  }
  return false;
};

const checkExtensions = async () => {
  let extensionsChecked = Object.keys(extensions).map(
    (key) =>
      fetch(`chrome-extension://${extensions[key].id}/${extensions[key].file}`)
        .then(() => ({ name: key, detected: true }))
        .catch(() => ({ name: key, detected: false }))

    // .catch((response) => {
    //   console.log(response);
    //   return { name: key, detected: false };
    // })
  );

  extensionsChecked = await Promise.all(extensionsChecked).then(
    (values) => values
  );

  const metaMask = { name: 'MetaMask', detected: checkMetaMask() };

  return extensionsChecked.concat(metaMask);
};

export default checkExtensions;
