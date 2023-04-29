const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const getCroppedImageUrl = (url: string | undefined) => {
  const target = "upload/";
  let index;
  if (isString(url)) {
    index = url.indexOf(target) + target.length;
  }
  return url?.slice(0, index) + "c_fill,h_450,w_450/" + url?.slice(index);
};

export default getCroppedImageUrl;
