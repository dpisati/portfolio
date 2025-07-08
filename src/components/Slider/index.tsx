"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const Slider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  return (
    <ReactCompareSlider
      boundsPadding={20}
      changePositionOnHover
      itemOne={<ReactCompareSliderImage src={beforeImage} alt="beforeImage" />}
      itemTwo={<ReactCompareSliderImage src={afterImage} alt="afterImage" />}
    />
  );
};
