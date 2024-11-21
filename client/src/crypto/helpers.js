import decryptFun from "./decrypt"

export const decryptMsg = async (data) => {
    data.salt = new Uint8Array(data.salt.split(",").map((s) => parseInt(s)))
    data.iv = new Uint8Array(data.iv.split(",").map((iv) => parseInt(iv)))
    data.message = await decryptFun(data.message, data.salt, data.iv)
}