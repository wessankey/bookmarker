import crypto from "crypto";

const key = crypto
  .createHash("sha512")
  .update(process.env.SECRET_KEY || "")
  .digest("hex")
  .substring(0, 32);

const iv = crypto
  .createHash("sha512")
  .update(process.env.SECRET_KEY || "")
  .digest("hex")
  .substring(0, 16);

export const encrypt = (data: string): string => {
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  const encrypted = cipher.update(data, "utf-8", "hex") + cipher.final("hex");
  return encrypted;
};

export const decrypt = (encryptedData: string) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted =
    decipher.update(encryptedData, "hex", "utf-8") + decipher.final("utf8");

  return decrypted;
};
