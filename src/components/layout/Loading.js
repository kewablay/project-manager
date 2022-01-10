import React from "react";
import loadingGif  from "../../spinner.gif";

const Loading = () => {
  return (
    <center>
      <img src={loadingGif} alt="loading.." />
    </center>
  );
};

export default Loading;
