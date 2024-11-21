const encoder = new TextEncoder();
let keyMaterial;

const toBase64 = (buffer) =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)));

const PBKDF2 = async (
  password,
  salt,
  iterations,
  length,
  hash,
  algorithm = "AES-CBC"
) => {
  keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode(salt),
      iterations,
      hash
    },
    keyMaterial,
    { name: algorithm, length },
    false, // we don't need to export our key!!!
    ["encrypt", "decrypt"]
  );
};

const encryptFun = (text, salt, iv) => {
  
  text = encoder.encode(text);

  return (async () => {
    const key = await PBKDF2("my password", salt, 100000, 256, "SHA-256");
    const encrypted = await window.crypto.subtle.encrypt(
      { name: "AES-CBC", iv },
      key,
      text
    );

    const concatennated = toBase64([
      ...salt,
      ...iv,
      ...new Uint8Array(encrypted)
    ]);
  
    return concatennated;
  })();
};

export default encryptFun;
