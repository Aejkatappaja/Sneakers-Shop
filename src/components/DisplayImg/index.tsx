interface ProductImageData {
  mainPicture: string;
  miniaturePictures: string[];
}

interface DisplayImgProps {
  data: ProductImageData;
  setIsVisible: (isVisible: boolean) => void;
  img: string;
  setImg: (img: string) => void;
  pictureModal: boolean;
  setPictureModal: (pictureModal: boolean) => void;
}

const DisplayImg = ({
  data,
  setIsVisible,
  img,
  setImg,
  pictureModal,
  setPictureModal,
}: DisplayImgProps) => {
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
