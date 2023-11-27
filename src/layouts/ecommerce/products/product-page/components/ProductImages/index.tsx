import { useState } from "react";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Stack from "@mui/material/Stack";

//  React TS components
import MDBox from "components/MDBox";

// Images
import image1 from "assets/images/productDetails/FinisherReportAUD-1.png";
import image2 from "assets/images/productDetails/FinisherReportAUD-2.png";
import image3 from "assets/images/productDetails/FinisherReportEUR-1.png";
import image4 from "assets/images/productDetails/FinisherReportEUR-2.png";
import image5 from "assets/images/productDetails/FinisherReportGBP-1.png";

function ProductImages({ productDatas }: any): JSX.Element {
  const [currentImage, setCurrentImage] = useState<string>(productDatas?.image);
  const [imgsViewer, setImgsViewer] = useState<boolean | number>(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState<number>(0);

  const handleSetCurrentImage = (img: any) => {
    setCurrentImage(img);
    // setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  const images = [
    { src: productDatas?.image },
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
  ];

  return (
    <MDBox>
      <ImgsViewer
        imgs={images}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <MDBox
        component="img"
        src={currentImage}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
      />
      <MDBox mt={2} pt={1}>
        <Stack direction="row" spacing={1}>
          {images.map((img, idx) => (
            <MDBox
              key={idx}
              component="img"
              id="0"
              src={img?.src}
              alt="small image 1"
              borderRadius="lg"
              shadow="md"
              width={90}
              height="5rem"
              minHeight="5rem"
              sx={{ cursor: "pointer", objectFit: "cover" }}
              onClick={() => handleSetCurrentImage(img.src)}
            />
          ))}
        </Stack>
      </MDBox>
    </MDBox>
  );
}

export default ProductImages;
