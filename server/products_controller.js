module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url} = req.body;

        dbInstance.create_product([name, description, price, image_url])
        .then( () => {
            dbInstance.read_products()
            .then( products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
                console.log(err);
            })
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
            console.log(err);
        });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product(req.params.id)
        .then( product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
            console.log(err);
        });
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products()
        .then( products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
            console.log(err);
        });
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([req.params.id, req.query.desc])
        .then( () => {
            dbInstance.read_products()
            .then( products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
                console.log(err);
            })
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed'});
            console.log(err);
        });
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product(req.params.id)
        .then( () => {
            dbInstance.read_products()
            .then( products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'});
                console.log(err);
            })
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed'});
            console.log(err);
        });
    }
};