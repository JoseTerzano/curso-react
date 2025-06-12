const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {

    const eventos = await Evento.find()//Trae todos los eventos, se pueden aplicar filtros con {}
        .populate('user', 'name');//Me muestra toda la info que contiene el user
    res.status(201).json({
        ok: true,
        eventos
    });
};

const crearEvento = async (req, res = response) => {

    const eventoGuardado = new Evento(req.body);

    try {
        eventoGuardado.user = req.uid;
        await eventoGuardado.save();
        res.status(200).json({
            ok: true,
            eventoGuardado
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }

};
const actualizarEvento = async (req, res = response) => {

    const eventoID = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoID);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese Id'
            });
        }
        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        };

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoID, nuevoEvento, { new: true });

        res.json({
            ok: true,
            eventoActualizado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }


};

const eliminarEvento = async(req, res = response) => {

    const eventoID = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoID);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese Id'
            });
        }
        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }

        await Evento.findByIdAndDelete(eventoID);

        res.json({
            ok: true,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }


    res.status(201).json({
        ok: true,
        msg: 'eliminar eventos'
    });

};

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}

