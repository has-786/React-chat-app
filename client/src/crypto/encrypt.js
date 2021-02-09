const encoder = new TextEncoder();
let keyMaterial

const toBase64 = buffer =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)));

const PBKDF2 = async (
  password, salt, iterations,
  length, hash, algorithm =  'AES-CBC') => {

  keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    {name: 'PBKDF2'},
    false,
    ['deriveKey']
  );


  return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(salt),
        iterations,
        hash
      },
      keyMaterial,
      { name: algorithm, length },
      false, // we don't need to export our key!!!
      ['encrypt', 'decrypt']
    );
}


const encryptFun=(text,salt,iv)=>{

  console.log("salt "+salt+" iv "+iv)
  console.log(text);
  text=encoder.encode(text);

  console.log(text);
  return (async ()=>{
               const key = await PBKDF2('my password', salt, 100000, 256, 'SHA-256');
               let encrypted =await window.crypto.subtle.encrypt(
                {name: "AES-CBC", iv },
                key,
                text
              );
              console.log(`Encrypted ${encrypted}`);
              //encrypted=toBase64(encrypted);
              //console.log(`toBase64 Encrypted ${encrypted}`);
              const concatennated=toBase64([...salt,...iv,...new Uint8Array(encrypted)])
              console.log(`concatennated ${concatennated}`)

              return concatennated;
        })()

}

export default {encryptFun}
/*

{ salt: "g9cGh/FKtMV1LhnGvii6lA==",
  iv: "Gi+RmKEzDwKoeDBHuHrjPQ==",
  encrypted: "uRl6jYcwHazrVI+omj18UEz/aWsdbKMs8GxQKAkD9Qk=",
  concatennated:

"g9cGh/FKtMV1LhnGvii6lBovkZihMw8CqHgwR7h64z25GXqNhzAdrOtUj6iaPXxQTP9pax1soyzwbFAoCQP1CQ=="}

*/
//So dirty, but it works. Let’s decrypt it:
