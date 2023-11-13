require('express');
const camarote = require('../models/camarote');
const crucero = require('../models/crucero');
const reserva = require('../models/reserva');

async function crearReserva(req,res){
  try{
      await reserva.create({
        idReserva: req.body.idReserva,
        fechaReserva: req.body.fechaReserva,
        estadoReserva: req.body.estadoReserva,
        idUsuario: req.body.idUsuario,
        idCamarote: req.body.idCamarote,
        idCrucero: req.body.idCrucero
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}

async function listarReserva(req, res){
  try{
      await reserva.findAll({
          attributes:[
              'idReserva',
              'fechaReserva',
              'estadoReserva',
              'idUsuario',
              'idCamarote',
              'idCrucero'
          ],
          order: ['idReserva']
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e)
  }
}

//Update restaurant
async function actualizarReserva(req, res){
  try{
      await reserva.update({
        idReserva: req.body.idReserva,
        fechaReserva: req.body.fechaReserva,
        estadoReserva: req.body.estadoReserva,
        idUsuario: req.body.idUsuario,
        idCamarote: req.body.idCamarote,
        idCrucero: req.body.idCrucero
      },{
          where: {idReserva: req.params.idReserva}
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}


async function desactivarReserva(req, res){
  try{
      await reserva.destroy({
          where: {idReserva: req.params.idReserva}
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}

module.exports = {
  crearReserva,
  listarReserva,
  actualizarReserva,
  desactivarReserva
};

