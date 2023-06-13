module.exports = function () {
  var data = {
    docentes: [
      {
        id: 1,
        nombreDocente: "Toby",
        apellidoDocente: "Martinez",
        correoDocente: "tobyMartinez@hotmail.com",
        claveDocente: "toby97",
        telefonoDocente: 987456321,
      },
      {
        id: 3,
        nombreDocente: "Monica",
        apellidoDocente: "Huamani",
        correoDocente: "ahgsahgs@hotmail.com",
        claveDocente: "monica7H",
        telefonoDocente: 951236478,
      },
      {
        id: 2,
        nombreDocente: "Monica",
        apellidoDocente: "Huamani",
        correoDocente: "monicaHuamani@hotmail.com",
        claveDocente: "monica7H",
        telefonoDocente: 951236478,
      },
      {
        id: 3,
        nombreDocente: "Luis",
        apellidoDocente: "Lianez",
        correoDocente: "luisLainez@hotmail.com",
        claveDocente: "lucho1990",
        telefonoDocente: 951236478,
      }
    ],
    actividades: [
      {
        id: 10,
        Titulo: "Tobby",
        Descripcion: "Gaaaaaaa",
        FechaPublicacion: "2022-09-10",
        FechaEntrega: "2022-09-10",
      },
      {
        id: 12,
        Titulo: "Makanaky",
        Descripcion: "Daaaaaaa",
        FechaPublicacion: "2021-09-10",
        FechaEntrega: "2012-09-10",
      },
      {
        id: 13,
        Titulo: "Actividad 1",
        Descripcion: "Descripción de la actividad 1",
        FechaPublicacion: "2023-04-29",
        FechaEntrega: "2023-05-06",
      },
      {
        id: 14,
        Titulo: "Actividad 2",
        Descripcion: "Descripción de la actividad 2",
        FechaPublicacion: "2023-04-30",
        FechaEntrega: "2023-05-07",
      },
      {
        id: 15,
        Titulo: "Actividad 3",
        Descripcion: "Descripción de la actividad 3",
        FechaPublicacion: "2023-05-01",
        FechaEntrega: "2023-05-08",
      },
      {
        id: 16,
        Titulo: "Actividad 4",
        Descripcion: "Descripción de la actividad 4",
        FechaPublicacion: "2023-05-02",
        FechaEntrega: "2023-05-09",
      },
      {
        id: 17,
        Titulo: "Actividad 5",
        Descripcion: "Descripción de la actividad 5",
        FechaPublicacion: "2023-05-03",
        FechaEntrega: "2023-05-10",
      },
      {
        id: 18,
        Titulo: "Actividad 6",
        Descripcion: "Descripción de la actividad 6",
        FechaPublicacion: "2023-05-04",
        FechaEntrega: "2023-05-11",
      },
      {
        id: 19,
        Titulo: "Actividad 7",
        Descripcion: "Descripción de la actividad 7",
        FechaPublicacion: "2023-05-05",
        FechaEntrega: "2023-05-12",
      },
      {
        id: 20,
        Titulo: "Actividad 8",
        Descripcion: "Descripción de la actividad 8",
        FechaPublicacion: "2023-05-06",
        FechaEntrega: "2023-05-13",
      },
      {
        id: 21,
        Titulo: "Actividad 9",
        Descripcion: "Descripción de la actividad 9",
        FechaPublicacion: "2023-05-07",
        FechaEntrega: "2023-05-14",
      },
      {
        id: 22,
        Titulo: "Actividad 10",
        Descripcion: "Descripción de la actividad 10",
        FechaPublicacion: "2023-05-08",
        FechaEntrega: "2023-05-15",
      }],
    estudiantejs: [
      {
        id: 1,
        NombreEstudiante: "Jose",
        ApellidoEstudiante: "Perez Alzamora",
        CorreoEstudiante: "Jose@gmail.com",
        ClaveEstudiante: "1234",
        TelefonoEstudiante: "987412365",
      },

    ],
    aula: [
      {
        id: 01,
        seccionAula: "GR18",
        vacanteAula: 30,
      },
      {
        id: 02,
        seccionAula: "SX47",
        vacanteAula: 15,
      },
      {
        id: 03,
        seccionAula: "BD64",
        vacanteAula: 4,
      },
      {
        id: 04,
        seccionAula: "CI30",
        vacanteAula: 22,
      }
    ],
<<<<<<< HEAD

    cursos: [ {CodigoCurso : "001", NombreCurso : "Programacion Web", Descripcion : "Curso de programacion web"},
    {CodigoCurso : "002", NombreCurso : "Base de Datos", Descripcion : "Curso de base de datos"},
    {CodigoCurso : "003", NombreCurso : "Sistemas Operativos", Descripcion : "Curso de sistemas operativos"},
    {CodigoCurso : "004", NombreCurso : "Inteligencia Artificial", Descripcion : "Curso de inteligencia artificial"},

    ]
=======
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
<<<<<<< HEAD
=======
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
>>>>>>> b5c7d8e (ultimos cambios)
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
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> b5c7d8e (ultimos cambios)
  }
  return data
}
