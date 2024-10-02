import express from 'express';

export default function expressInit(app){
    app.engine('hbs', handlebars.engine({
        extname:'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}