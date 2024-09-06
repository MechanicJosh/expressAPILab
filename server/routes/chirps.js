const express = require('express');
const chirpsstore  = require('../chirpsstore');
const router = express.Router();

router.get('/', (req, res) => {
    const chirps = chirpsstore.GetChirps();
    res.json(chirps);
});

router.post('/', (req, res) => {
    const newChirp = req.body;
    chirpsstore.CreateChirp(newChirp);
    res.send('chirp created');
});

router.put('/:id', (req, res) =>{
    const chirpId = paresInt(req.params.id, 10);
    const updateChirp = req.body;
    chirpsstore.UpdateChirp(chirpId, updateChirp);
    res.send('Chirp Updated');
});

router.delete('/:id', (req, res) => {
    const chirpId = parseInt(req.params.id, 10);
    chirpsstore.DeleteChirp(chirpId);
    res.send('Chirp Deleted');
})


module.exports = router;