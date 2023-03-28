import { useState } from "react";

interface ProductImageData {
  mainPicture: string;
  miniaturePictures: string[];
}

interface DisplayImgProps {
  data: ProductImageData;
}

const DisplayImg = ({
  data,
  isVisible,
  setIsVisible,
  img,
  setImg,
  pictureModal,
  setPictureModal,
}: DisplayImgProps & {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  pictureModal: boolean;
  setPictureModal: (pictureModal: boolean) => void;
  img: string;
  setImg: (imgUrl: string) => void;
}) => {
  return !pictureModal ? (
    <>
      <div
        className="main-picture-holder"
        onClick={() => {
          setIsVisible(true);
          setPictureModal(true);
        }}
      >
        <img src={img} alt="" />
      </div>
      <div className="miniatures-pictures-holder">
        {data.miniaturePictures.map((picture, index) => {
          return (
            <div
              className="miniatures"
              key={index}
              onClick={() => setImg(picture)}
            >
              <img src={picture} alt="" />
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <div
      className="modal-picture-holder"
      onClick={() => {
        setIsVisible(true);
        setPictureModal(true);
      }}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default DisplayImg;
