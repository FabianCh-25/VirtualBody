module.exports = function () {

  var data = {
    actividades: [
      {
        CodigoActividad:1,
        Titulo: "Tobby",
        Descripcion: "Gaaaaaaa",
        FechaPublicacion:"2022-09-10",
        FechaEntrega:"2022-09-10",

      }
    ],
    estudiantejs: [
      {
        id:1,
        NombreEstudiante: "Tobby",
        ApellidoEstudiante: "Gaaaaaaa",
        CorreoEstudiante:"carl@gmail.com",
        ClaveEstudiante:"321",
        TelefonoEstudiante:"963258741",

      }
    ],
    grupojs: [
      {
        idGrupo:1,
        nombreGrupo: "Loselocuentes",
        descripcionGrupo: "botatuga",
      }
    ],
    grupoxestudiantejs: [
      {

        idGrupoxEstudiante:1,
        grupo:{
          nombreGrupo: "Loselocuentes",
          descripcionGrupo: "botatuga",
        },
        estudiante:{
          NombreEstudiante: "Tobby",
          ApellidoEstudiante: "Gaaaaaaa",
          CorreoEstudiante:"carl@gmail.com",
          ClaveEstudiante:"321",
          TelefonoEstudiante:"963258741",
        },
        fechaacceso:"2022-03-03"
      }
    ],
  }
  return data
  }
