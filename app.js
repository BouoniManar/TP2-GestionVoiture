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



app.get('/listevoiture', (req,res) => {
    res.status(200).json(voitures)})



app.get('/listevoiture/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const voiture = voitures.find(voiture => voiture.id === id)

    if (!voitures) {
        return res.status(404).send('Car not found');
    }
    res.status(200).json(voiture)
});


app.post('/AjoutVoiture',(req,res)=>{
    voitures.push(req.body)
    res.send(voitures);
});





app.put('/MAJ/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let voiture = voitures.find(voiture => voiture.id === id)
    voiture.name =req.body.name;

    if (voitures === -1){
        return res.status(404).send('Car not found');
    }

        res.status(200).json(voitures)

})



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

