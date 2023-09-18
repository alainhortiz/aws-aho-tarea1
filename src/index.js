module.exports.handler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: "Hola Mundo!",
                    // input: event,
                },
                null,
                2
            ),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    message: "Error en el metodo GET: " + error.message,
                    // input: event,
                }
            )
        };
    }
};
