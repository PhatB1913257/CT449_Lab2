const config = {
    app: {
    port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://phatto:Phat010501@cluster0.hdjxxpq.mongodb.net/ct449_b1913257?retryWrites=true&w=majority"
    }
};
    module.exports = config;