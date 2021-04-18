const cosmos = require("@azure/cosmos");
const CosmosClient = cosmos.CosmosClient;

const endpoint = "https://twitch-17-abril-db.documents.azure.com";
const masterKey = "q8x8Hbg7iE1SwoHUl4GGelqLngsF2qGttZMGTKtI75aMN0PhHccVdhFVAHv9stZwdZ3xZu3DxGiwGaoyMhs9VQ==";
const client = new CosmosClient({ endpoint, key: masterKey });

const databaseId = "poblacion"
const containerId = "familias"

module.exports = async function (context, req) {
    if (req.body.id) {
        const docId = req.body.id
        const partKey = req.body.id
        await client.database(databaseId).container(containerId).item(docId, partKey).delete()
        context.res = {
            status: 200,
            body: "Eliminado"
        };
        context.done();
    }
    else {
        context.res = {
            status: 400,
            body: "No hay un id para eliminar"
        };
        context.done();
    }
};