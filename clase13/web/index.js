window.onload = function () {
  const boton = document.getElementById("boton");

  let myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dezdyauun",
      uploadPreset: "luiscascante",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );

  boton.addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );
};
