const moongose = require("mongoose");

const activoSchema = new moongose.Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  unidad: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
});

const Activo = moongose.model("Activo", activoSchema);

module.exports = Activo;
