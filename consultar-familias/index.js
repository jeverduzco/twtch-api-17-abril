module.exports = async function (context, req) {
    const familias = context.bindings.consultarFamilias
    if (familias != 0) {
        context.res = {
            status: 200,
            body: context.bindings.consultarFamilias
        };
    }
    else {
        context.res = {
            status: 204
        };
    }
};