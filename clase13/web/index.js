window.onload = function () {
  const boton = document.getElementById("boton");

  let cloudinaryWidget = cloudinary.createUploadWidget(
    {
      cloud_name: "dezdyauun",
      preset: "luiscascante",
    },
    (error, result) => {
      if (result.event === "success") {
        console.log("Imagen subida con éxito", result.info);
        const imagen = document.getElementById("foto");
        imagen.src = result.info.secure_url;
      }
    }
  );

  boton.addEventListener("click", function () {
    cloudinaryWidget.open();
  });
};
