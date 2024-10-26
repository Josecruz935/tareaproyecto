const express= require('express')
const app= express()

// settings
app.set ('port',3000)

//routes
app.get ('/',(req,rest)=>{
    rest.send('bienevenidos')
})

app.listen(app.get('port'),()=>{
    console.log(`proyecto correindo en el puerto ${app.get('port')}`)
})
