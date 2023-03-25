const arregloTraslados = [
  {
    unidadDestino: "Calle 113 Curridabat",
    unidadOrigen: "Terramall",
    idActivo: 25,
    fecha: "2020-10-10",
    danado: false,
    trackingId: 123456,
  },
  {
    unidadDestino: "San José, Av. Central",
    unidadOrigen: "Amazonas",
    id: 30,
    fecha: "2020-10-20",
    danado: true,
    trackingId: 123457,
  },
  {
    unidadDestino: "Multiplaza del Este",
    unidadOrigen: "Escazú",
    id: 45,
    fecha: "2020-10-30",
    danado: false,
    trackingId: 123458,
  },
];

window.onload = function () {
  const listaTraslados = document.getElementById("lista-traslados");

  // Iteramos sobre el arreglo de traslados
  arregloTraslados.forEach(function (traslado) {
    // Creo html para cada traslado (li)
    const listItemTraslado = document.createElement("li");
    listItemTraslado.classList.add("list-group-item");

    // Crea un párrafo con el texto "Tracking ID: 123456"
    const trackingId = document.createElement("p");
    trackingId.innerText = `Tracking ID: ${traslado.trackingId}`;

    // Crea un párrafo con el texto "Fecha: 2020-10-10"
    const fechaTraslado = document.createElement("p");
    fechaTraslado.innerText = `Fecha: ${traslado.fecha}`;

    // Agregar unidad de destino
    const unidadDestino = document.createElement("p");
    unidadDestino.innerText = `Unidad destino: ${traslado.unidadDestino}`;

    // Agregar hijos al html del traslado (li)
    listItemTraslado.appendChild(trackingId);
    listItemTraslado.appendChild(fechaTraslado);
    listItemTraslado.appendChild(unidadDestino);

    // Vamos a agregar el LI a la UL (lista de traslados)
    listaTraslados.appendChild(listItemTraslado);
  });
};
