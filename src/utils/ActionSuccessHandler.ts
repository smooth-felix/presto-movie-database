const actionSuccessHandler = (status: number | null): boolean => {
  if (status === 200) {
    return true;
  }
  return false;
};

export default actionSuccessHandler;
