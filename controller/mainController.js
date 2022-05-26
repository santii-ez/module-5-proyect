const about = {
    title: 'Lo que quieras',
    description: 'Esto es una prueba',
    history: 'Cualquier info',
    menu: 'Nuestro menu disponible'
}

const menuDelDia = [{
    id: 1,
    title: 'Carpaccio fresco',
    description: 'Entrada Carpaccio de salmón con cítricos',
    price: 'U$S 65.50'
},
{
    id: 2,
    title: 'Risotto de berenjena',
    description: 'Risotto de berenjena y queso de cabras',
    price: 'U$S 47.0'
},
{
    id: 3,
    title: 'Milanesa a la napolitana',
    description: 'Con pure de tomates frescos',
    price: 'U$S 12.50'
},
{
    id: 4,
    title: 'Locro',
    description: 'Hecho con vaya a saber qué cosa',
    price: 'U$S 1.0'
},
{
    id: 5,
    title: 'Empanadas',
    description: 'De carne, de pollo y de jamón y queso',
    price: 'U$S 13.0'
}];

const mainController = {
    index: (req, res) => {
        res.render('index', { about: about, menu: menuDelDia });
    },
    detail: (req, res) => {
        let plato = menuDelDia.find(plato => plato.id == req.params.menuId)
        console.log(plato);
        res.render('detalleMenu', { plato: plato });
    }
};

module.exports = mainController;