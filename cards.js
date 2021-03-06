
(function()
{
  'use strict';

  angular
  .module("myApp", [])  //  (Nombre de la aplicación, Dependencias)
  .controller("cardController", cardController);


  //  Controlador de manejar las tarjetas mostradas.
  function cardController()
  {
    var cards = this;

    cards.informacion = [
      //  Android
      {
        'name' : 'Android básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/android.png'
      },
      {
        'name' : 'Android intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/android.png'
      },
      {
        'name' : 'Android avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/android.png'
      },
      // Arduino
      {
        'name' : 'Arduino básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/arduino.png'
      },
      {
        'name' : 'Arduino intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/arduino.png'
      },
      {
        'name' : 'Arduino avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/arduino.png'
      },
      //  C-Sharp
      {
        'name' : 'C# básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/csharp.png'
      },
      {
        'name' : 'C# intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/csharp.png'
      },
      {
        'name' : 'C# avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/csharp.png'
      },
      // Python
      {
        'name' : 'Python básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/python.png'
      },
      {
        'name' : 'Python intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/python.png'
      },
      {
        'name' : 'Python avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/python.png'
      },
      //  Ruby
      {
        'name' : 'Ruby básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/ruby.png'
      },
      {
        'name' : 'Ruby intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/ruby.png'
      },
      {
        'name' : 'Ruby avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/ruby.png'
      },
      //  PHP
      {
        'name' : 'PHP básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/php.png'
      },
      {
        'name' : 'PHP intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/php.png'
      },
      {
        'name' : 'PHP avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/php.png'
      },
      //  Linux
      {
        'name' : 'Linux básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/linux.png'
      },
      {
        'name' : 'Linux intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/linux.png'
      },
      {
        'name' : 'Linux avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/linux.png'
      },
      //  Web
      {
        'name' : 'Web básico',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/web.png'
      },
      
      {
        'name' : 'Web intermedio',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/web.png'
      },
      {
        'name' : 'Web avanzado',
        'fecha' : '12/06/2017 al 16/06/2017',
        'horario' : '08:00 - 12:00',
        'antecedentes' : 'Ninguno',
        'dias' : 'Lunes a viernes',
        'lugar' : 'Por asignar',
        'cupo' : '15 lugares',
        'costoUNAM' : '$800.00',
        'costoExterno' : '$1600.00',
        'costoGeneral' : '$2500.00',
        'img' : 'img/web.png'
      }
    ];
  }

})();