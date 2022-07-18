const downloadFile = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Mahadi's_Resume.pdf`);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
};
export default downloadFile;
