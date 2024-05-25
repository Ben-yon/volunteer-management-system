
// export const  base64ToBytes = (base64: string) => {
//     const binString = atob(base64);
//     return Uint8Array.from(binString, (m) => m.codePointAt(0));
//   }
  
export function extractBase64(imageDataUrl: string): string {
    const base64Prefix = "data:image/png;base64,";
    if (imageDataUrl.startsWith(base64Prefix)) {
        return imageDataUrl.substring(base64Prefix.length);
    } else {
        throw new Error("Invalid image data URL");
    }
}


export function base64ToBinary(base64String: string): Buffer {
    return Buffer.from(base64String, 'base64');
}
