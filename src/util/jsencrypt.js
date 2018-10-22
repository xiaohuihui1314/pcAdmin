export default {
    getUrlpwd(p, datetime, kkencrypt) {
        /*eslint-disable*/
        const key = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9yq9C6IQtGiPpy2E+PjI4yWp7acFJVno+V4veswvH1pfjoHgnLFvP5id4fyuc3JgU01Rc8znJYOHJ89fH24janOVhAmOOnmjF2juL8gXTBTsvjVTnbJijzWENE7D7vfBrwIudJ+Tid/UeYbfZya0JAM1WhTGzAYhBSP9PpEiuMQIDAQAB-----END PUBLIC KEY-----';
        kkencrypt.setPublicKey(key);

        let encryptedPwd = kkencrypt.encrypt(datetime + p);
        encryptedPwd = encryptedPwd.replace(/\+/g, '-');
        encryptedPwd = encryptedPwd.replace(/\//g, '_');
        encryptedPwd = encryptedPwd.replace(/=/g, '');
        return encryptedPwd;
    },


    getsKey(p) {
        /*eslint-disable*/
        const key = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9yq9C6IQtGiPpy2E+PjI4yWp7acFJVno+V4veswvH1pfjoHgnLFvP5id4fyuc3JgU01Rc8znJYOHJ89fH24janOVhAmOOnmjF2juL8gXTBTsvjVTnbJijzWENE7D7vfBrwIudJ+Tid/UeYbfZya0JAM1WhTGzAYhBSP9PpEiuMQIDAQAB-----END PUBLIC KEY-----';
        const kkencrypt = new JSEncrypt();
        kkencrypt.setPublicKey(key);

        let encryptedPwd = kkencrypt.encrypt(p);
        encryptedPwd = encryptedPwd.replace(/\+/g, '-');
        encryptedPwd = encryptedPwd.replace(/\//g, '_');
        encryptedPwd = encryptedPwd.replace(/=/g, '');
        return encryptedPwd;
    }
};

