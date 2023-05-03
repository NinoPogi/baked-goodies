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
    url?.slice(0, index) +
    "q_auto/e_vectorize:corners:40:detail:5.0/" +
    url?.slice(index)
  );
};

export default getCroppedImageUrl;
