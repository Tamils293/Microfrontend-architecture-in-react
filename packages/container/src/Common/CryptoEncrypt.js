const saltedMd5 = require('salted-md5');

const CryptoEncrypt = (text) => {
    return saltedMd5(text, 'e8b7b40e031300000000da247441226a');
}

export default CryptoEncrypt;
