

let express = require('express');
let app = express();

app.use(express.static('static'));
app.use(express.urlencoded({extended : false}));

let hbrs = require('express-handlebars');
let hbs = hbrs.create({
    defaultLayout : 'index',
    extname : 'hbs'
});

app.set("view engine", 'hbs');
app.engine("hbs", hbs.engine);
app.set("views", 'hbs');


app.get('/', (req,res)=>{

    res.render('first',{
        title : 'first page',
        my_page : 'first page',

    });
});




app.listen('3015',()=>{
    console.log('Hello Handlebars ExpressJS NodeJS and Git')
})










