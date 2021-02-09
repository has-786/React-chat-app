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

              const concatennated=toBase64([...salt,...iv,...new Uint8Array(encrypted)])
              console.log(`concatennated ${concatennated}`)
              return concatennated;
        })()

}

export default encryptFun
