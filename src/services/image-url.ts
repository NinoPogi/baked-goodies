const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const getCroppedImageUrl = (url: string | undefined) => {
  const target = "upload/";
  let index;
  if (isString(url)) {
    index = url.indexOf(target) + target.length;
  }
  return (
    url?.slice(0, index) + "q_auto:best/c_scale,w_450/" + url?.slice(index)
  );
};

export default getCroppedImageUrl;
