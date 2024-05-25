import { SyntheticEvent, useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
  type Crop,
} from "react-image-crop";
import setCanvasPreview from "../utils/setCanvasPreview";
import { ModalProps } from "../interfaces/ModalProps";

const MIN_DIMENSION: number = 150;
const ASPECT_RATIO: number = 1;

export const ImageCropper: React.FC<ModalProps> = ({ updateAvatar, closeModal }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState("");

  const [crop, setCrop] = useState<Crop>();

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const imgElement = new Image();
      const imageUrl = e.target?.result as string;
      imgElement.src = imageUrl;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      imgElement.onload = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ): void => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = event.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels");
          return setImageSrc("");
        }
      };
      setImageSrc(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const onImageLoad = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const { width, height } = event.currentTarget;
    const croppedWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: croppedWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
      <label className="block mb-3 w-fit">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="block w-full text-sm text-primary file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:bg-red-700 file:text-gray-300 hover:file:bg-red-300"
        />
      </label>
      {error && <p className="text-gray-100 text-xs">{error}</p>}
      {imageSrc && (
        <div className="flex flex-col items-center">
          <ReactCrop
            crop={crop}
            onChange={(percentCrop) => setCrop(percentCrop)}
            circularCrop
            keepSelection
            aspect={ASPECT_RATIO}
            minWidth={MIN_DIMENSION}
          >
            <img
              src={imageSrc}
              ref={imageRef}
              alt="upload"
              onLoad={onImageLoad}
              style={{ maxHeight: "70vh" }}
            />
          </ReactCrop>
          <button
            className="text-secondary font-mono text-xs rounded-2xl px-4 py-2 mt-4 bg-primary hover:bg-gray-100"
            onClick={() => {
              setCanvasPreview(
                imageRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  crop,
                  imageRef.current?.width,
                  imageRef.current?.height
                )
              )
              const dataUrl = previewCanvasRef.current?.toDataURL();
              updateAvatar(dataUrl)
              closeModal()
            } 
            }
          >
            Crop Image
          </button>
        </div>
      )}
      {crop && (
        <canvas
          ref={previewCanvasRef}
          className="mt-4 border border-black-1 object-contain w-[150px] h-[150px]"
          style={{
            display: 'none'
          }}
        />
      )}
    </>
  );
};
