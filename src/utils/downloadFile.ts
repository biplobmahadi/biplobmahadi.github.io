const downloadFile = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `Mahadi's_Resume.pdf`);

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link.parentNode?.removeChild(link);
};
export default downloadFile;
