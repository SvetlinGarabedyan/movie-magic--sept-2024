import handlebarsInit from 'express-handlebars';

export default function handlebarsInit(app){
    app.use(express.urlencoded({extended: false}))
    app.use(express.static('public'));
}