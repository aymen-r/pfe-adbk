const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Assia_Jdey:24251586@cluster0.f4mcp.mongodb.net/projetData?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));