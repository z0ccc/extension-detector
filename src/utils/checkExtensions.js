import extensions from './extensions';

const checkExtensions = async () => {
  const urls = Object.keys(extensions).map(
    (key) =>
      fetch(`chrome-extension://${extensions[key].id}/${extensions[key].file}`)
        .then(() => ({ name: key, detected: true }))
        .catch(() => ({ name: key, detected: false }))

    // .catch((response) => {
    //   console.log(response);
    //   return { name: key, detected: false };
    // })
  );

  return Promise.all(urls).then((values) => values);
};

export default checkExtensions;
