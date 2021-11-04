const connection = require("../config/db");

exports.guardarPaises = async (req, res) => {
  try {
    const paises = req.body.data || false;
    let paisesNoGuardados = [];
    if (!paises) {
      res.status(400).json({
        ok: "false",
        msg: "Body vacio",
      });
    } else {
      for (pais of paises) {
        let sqlComprobacion = `SELECT pais FROM paises Where pais like '${pais.nombrePais}'`;
        let sqlInsercion = `INSERT INTO paises (pais , capital) VALUES ('${pais.nombrePais}','${pais.nombreCapital}') `;
        await connection.query(sqlComprobacion).then(async ([result]) => {
          if (result.length === 0) {
            await connection.query(sqlInsercion);
          } else {
            paisesNoGuardados.push(pais);
          }
        });
      }
    }
    res.status(200).json({
      ok: true,
      noSave: paisesNoGuardados,
    });
  } catch (error) {}
};
