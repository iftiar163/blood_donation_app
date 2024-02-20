import cloudinay from "cloudinary";

// configuration
cloudinay.v2.config({
  cloud_name: "dwrvexxbo",
  api_key: "826846917594269",
  api_secret: "FM4Ox7kqnQXpPrX7PoqIRgiIDGc",
});

// file upload to cloude
export const fileUploadToCloud = async (path) => {
  const data = await cloudinay.v2.uploader.upload(path);
  return data;
};

// file delete form cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinay.v2.uploader.destroy(publicId);
};
