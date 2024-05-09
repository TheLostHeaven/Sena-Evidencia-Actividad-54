import Publication from "../models/Publication.js";

//Create
export const createPublication = async (req, res) =>{

  const {placa, numeroDeSerie, modelo, marca, kilometraje, tipo} = req.body;
  if (!placa || !numeroDeSerie || !modelo || !marca || !kilometraje || !tipo){
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' });}

  try {
    const newPublication = new Publication ({
      placa,
      numeroDeSerie,
      modelo,
      marca,
      kilometraje,
      tipo
    });

    const publicacionSaved = await newPublication.save();

    res.status(201).json(publicacionSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
};

//Get
export const getPublication = async (req, res) => {
  try {
    const Publicacions = await Publication.find({})
    return res.json(Publicacions);
  }
  catch (error) {
    return res.status(500).json({ msg:error.message })
  }
};

//GetForId
export const getPublicationById = async (req, res) => {
  try{
    const { id } = req.params;
    const Publications = await Publication.findById(id);
    res.status(200).json(Publications)
  }catch (error){
    return res.status(500).json({ msg: error.message})
  }
};

//Update
export const updatePublicationById = async (req, res) =>{
  try {
    const { id } = req.params
    const { placa, numeroDeSerie, modelo, marca, kilometraje, tipo} = req.body

    const existingPublication = await Publication.findById(id);
    if (!existingPublication) {
      return res.status(404).json({ message: "Publication not found"})
    }

    await Publication.findByIdAndUpdate(id, {
      placa: placa,
      numeroDeSerie: numeroDeSerie,
      modelo: modelo,
      marca: marca,
      kilometraje: kilometraje,
      tipo: tipo
    });

    const updatePublication = await Publication.findById(id);
    return res.json(updatePublication);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Delete
export const deletePublicationById = async (req, res) => {
  try {
    const { id } = req.params;
    await Publication.findByIdAndDelete(id);
    res.json({ msg: "Publication deleted" })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
}

};
