const axios = require("axios");
const Oportunity = require("../models/Oportunity");

module.exports = {
  async store(req, res) {
    try {
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
    } catch (error) {
      return res.json({ error });
    }
  },

  async index(req, res) {
    try {
      const oportunitys = await Oportunity.find();

      return res.json({ oportunitys });
    } catch (error) {
      return res.json({ error });
    }
  },
};
