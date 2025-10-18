let express = require('express');
let app = express();

// json data
let seaSlugs = {
    "data" : [
        {
            name: "Scarlet",
            size: "5cm",
            location: "West coast of Britain and Ireland"
        },
        {
            name: "Violet",
            size: "5cm",
            location: "British coasts"
        },
        {
            name: "Lemon",
            size: "12cm",
            location: "UK coasts"
        },
        {
            name: "Orange-clubbed sea slug",
            size: "2cm",
            location: "All UK coasts, except in South East England"
        },
        {
            name: "Yellow edged polycera",
            size: "2cm",
            location: "South and west Britain",
        },
        {
            name: "Cowrie",
            size: "1cm",
            location: "North and west coasts of Britain and around Ireland"
        },
        {
            name: "Periwinkle",
            size: "1.5cm",
            location: "Rocky shores all around the UK, but absent from most of Lincolnshire and East Anglia."
        },
        {
            name: "Whelk",
            size: "5-10cm",
            location: "All around UK coasts"
        },
        {
            name: "Netted",
            size: "3cm",
            location: "Most coasts around Britain and Ireland"
        },
        {
            name: "Purple topshell",
            size: "2.2.cm",
            location: "Southern and western shores of Britain, as far north as Scotland, and on suitable shores in Ireland"
        }
    ]
}

// route 1

app.use('/', express.static('public'));

// route 2

app.get('/data', (request, response) => {
    response.json(seaSlugs);
})

// route 3

app.get('/data/:slug', (request, response) => {

    let user_slug = request.params.slug;
    let user_obj;
    for (let i=0; i<seaSlugs.data.length; i++) {
        if (user_slug == seaSlugs.data[i].name) {
            user_obj = seaSlugs.data[i];
        }
    }
    if(user_obj) {
        response.json(user_obj);
    } else{
        response.json({status: "info not available"});
    }
})

// set server port

app.listen(3000, () => {
    console.log('app is listening at localhost: 3000');
})