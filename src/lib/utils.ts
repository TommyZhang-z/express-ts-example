export const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

export const generateId = ({
  prefix = undefined,
  separator = "-",
}: {
  prefix?: string;
  separator?: string;
}): string => {
  const timestamp = getTimestamp();
  const randomPart = Math.random().toString(36).substring(2, 12);
  return `${
    prefix ? `${prefix}${separator}` : ""
  }${timestamp}${separator}${randomPart}`;
};
