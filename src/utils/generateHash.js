import md5 from 'crypto-js/md5';

const generateHash = (data) => md5(JSON.stringify(data)).toString();

export default generateHash;
