const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());

const heroes = {
    'izuku midoriya': {
        'age': 16,
        'heroName': 'Deku',
        'heroType': 'Sympathetic Superhero',
        'quirks': ['One for All', 'Gearshift', 'Fa Jin', 'Danger Sense', 'Blackwhip', 'Smokescreen', 'Float'], 
        'birthday': 'July 15',
        'ultimateMoves': ['Detroit Smash', 'Delaware Smash', 'One for All: Full Cowl - 100%', 'One for All: 100%', 'One for All: Full Cowl - Shoot Style', 'Blackchain', 'Transmission', 'Overdrive', 'Full Blast'],
        'bestNicknames': 'Young Midoriya, Fanboy, Damn Nerd, Weakling, House Arrest, Problem Child, Diseased Maggot, Crybaby Hero',
        'hobbies': 'Studying, Training, Strategizing'
    },
    'shoto todoroki':{
        'age': 16,
        'heroName': 'Shoto',
        'heroType': 'Troubled Rival', 
        'quirks': ['Half-Cold Half-Hot'],
        'birthday': 'January 11',
        'ultimateMoves': [],
        'bestNicknames': 'Icy-Hot, Hand Crusher, Half-and-Half Bastard, Dry Ice, Five Weenies',
        'hobbies': 'Eating cold soba, training, sleeping, visiting Mom'
    },
    'katsuki bakugo':{
        'age': 17,
        'heroName': 'Great Explosion Murder God DynaMight',
        'heroType': 'Power-Hungry Superhero', 
        'quirks': ['Explosion'],
        'birthday': 'April 20',
        'ultimateMoves': [],
        'bestNicknames': 'Kacchan, Young Bakugo, Bakubro, Angry Pomeranian',
        'hobbies': 'Hiking, Drumming, Cooking'
    },
    'unknown':{
        'age': 'unknown',
        'heroName': 'unknown',
        'heroType': 'unknown', 
        'quirks': 'unknown',
        'birthday': 'unknown',
        'ultimateMoves': 'unknown',
        'bestNicknames': 'unknown',
        'hobbies': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.json(heroes);
})

app.get('/api/:charName', (request, response) => {
    const charName = request.params.charName.toLowerCase();
    console.log(request.params.charName)
    if(heroes[charName]){
        response.json(heroes[charName]);
    }else{
        response.json(heroes['unknown']);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})