// src/lib/cloudinary.ts

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
};

// Build an optimized Cloudinary URL manually (no SDK needed for display)
export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
    crop?: string;
    type?: "image" | "video";
  } = {},
): string {
  const {
    width = "auto",
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    type = "image",
  } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    `c_${crop}`,
    width ? `w_${width}` : "",
    height ? `h_${height}` : "",
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/${type}/upload/${transforms}/${publicId}`;
}
