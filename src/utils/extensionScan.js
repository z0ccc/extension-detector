import extensions from './extensions';

const checkExtensions = async () => {
  const urls = Object.keys(extensions).map((key) =>
    fetch(`chrome-extension://${extensions[key].id}/${extensions[key].file}`)
      .then(() => ({ [key]: true }))
      .catch((e) => ({ [key]: false }))
  );

  Promise.all(urls).then((values) => {
    console.log(values);
  });
};

export default checkExtensions;
