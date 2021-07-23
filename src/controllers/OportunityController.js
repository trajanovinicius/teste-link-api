const axios = require("axios");
const Oportunity = require("../models/Oportunity");

module.exports = {
  async store(req, res) {
    const response = await axios.get(
      `${process.env.URL_PIPEDRIVE}${process.env.TOKEN_PIPEDRIVE}`
    );

    const arr = response.data.data;

    // PRA CADA RESPOSTA ELE INSERE A OPORTUNIDADE NO BANCO
    arr.map(async function (responseArray) {
      await Oportunity.create({
        oportunity_id: responseArray.id,
        value: responseArray.value,
        day: responseArray.add_time,
      });
    });

    return res.json({
      message: "Oportunidades agregadas com sucesso!",
    });
  },

  async index(req, res) {
    const oportunitys = await Oportunity.find();

    return res.json({
      Opotunitys: {
        oportunitys,
      },
    });
  },
};
