import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({

  placa: {
    type: String,
    trim: true
  },

  numeroDeSerie:{
    type: Number,
    trim: true
  },

  modelo:{
    type: String,
    trim: true
  },

  marca: {
    type: String,
    trim: true
  },

  kilometraje: {
    type: Number,
    trim: true
  },

  tipo: {
    type: String,
    trim: true
  },

},
{
  timestamps: true,
  versionKey: false
})

export default mongoose.model('Publication', publicationSchema);
