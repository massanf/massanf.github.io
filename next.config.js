/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "/imgs",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    //
    // If nextImageExportOptimizer_generateAndUseBlurImages is false and you
    // forget to set `placeholder="empty"`, you'll see 404 errors for the missing
    // placeholder images in the console.
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
