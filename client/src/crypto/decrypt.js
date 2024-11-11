const decoder = new TextDecoder();
const encoder = new TextEncoder();

const fromBase64 = (buffer) =>
  Uint8Array.from(atob(buffer), (c) => c.charCodeAt(0));

const PBKDF2 = async (
  password,
  salt,
  iterations,
  length,
  hash,
  algorithm = "AES-CBC"
) => {
  const keyMaterial = await window.crypto.subtle.importKey(
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

const decryptFun = (encrypted, salt, iv) => {
  //encrypted = fromBase64('g9cGh/FKtMV1LhnGvii6lBovkZihMw8CqHgwR7h64z25GXqNhzAdrOtUj6iaPXxQTP9pax1soyzwbFAoCQP1CQ==');
  console.log(encrypted);
  encrypted = fromBase64(encrypted);
  console.log(encrypted);
  const salt_len = 16;
  const iv_len = 16;
  console.log(iv);
  console.log(salt);

  return (async () => {
    const key = await PBKDF2("my password", salt, 100000, 256, "SHA-256");
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-CBC", iv },
      key,
      encrypted.slice(salt_len + iv_len)
    );
    console.log(decrypted);
    return decoder.decode(decrypted);
  })();
};
//console.log(decoder.decode(decrypted));

export default decryptFun;
