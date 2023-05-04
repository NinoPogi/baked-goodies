const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const getCroppedImageUrl = (url: string | undefined) => {
  const target = "upload/";
  let index;
  if (isString(url)) {
    index = url.indexOf(target) + target.length;
    const extIndex = url.lastIndexOf(".jpg");
    if (extIndex !== -1 && extIndex === url.length - 4) {
      url = url.slice(0, extIndex);
    }
  }
  return (
    url?.slice(0, index) +
    "f_auto/q_auto/c_scale,w_550,h_500/" +
    url?.slice(index)
  );
};

export default getCroppedImageUrl;
