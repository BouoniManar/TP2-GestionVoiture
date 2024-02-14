const express = require('express');
const app = express();



app.listen(7000,()=>{
    console.log('listening on port 7000')
})

let voitures = [
        {id:1,name:"clio"} ,
        {id:2,name:"megane"} ,
        {id:3,name:"range"}
]

app.get('/AjoutVoiture',(req,res)=>{
    const nouvelleVoiture = req.body;
    voitures.push(nouvelleVoiture);
    res.send(voitures);
});

app.get('/listevoitures', (req, res) => {
    res.json(voitures);
});


app.get('/Listevoitures/:id', (req, res) => {
    const voitureId = parseInt(req.params.id);

    const voiture = voitures.find(voiture => voiture.id === voitureId);

    if (!voiture) {
        res.status(404).json({ message: "Voiture not found" });
    } else {
        res.json(voiture);
    }
});


app.put('/voiture/update', (req,res) =>
{
    const update = req.body;
    voitures.update=update;
    res.send ( voitures);

});



app.delete('/delete/:id', (req, res) => {
    const voitureId = parseInt(req.params.id);

    const index = voitures.findIndex(voiture => voiture.id === voitureId);

    if (index === -1) {
        res.status(404).json({ message: "Voiture not found" });
    } else {
        const voitureSupprimee = voitures.splice(index, 1);
        res.json(voitureSupprimee[0]);
    }
});

