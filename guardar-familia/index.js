module.exports = async function (context, req) {
    if (req.body.id) {
        context.bindings.guardarFamilia = req.body
        context.res = {
            status: 200
        };
    } else {
        context.res = {
            status: 400
        }; 
    }

}