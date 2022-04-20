const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(' hello from my double smart node, bla bla')
});

/* app.get('/users', (req,res) => {
    res.send('hello from users');
}); */

/* app.get('/users', (req,res) => {
    res.send({id: 1, name: 'abdul Alim', job: 'halim khawa'});
}); */

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'Sabila', email: 'Sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'Sohana', email: 'Sohana@gmail.com', phone: '0178888888' }
];

app.get('/users', (req, res) => {
    console.log('query',req.query);
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    } 
    else {
        res.send(users);
    }
    // res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    // res.send('finding user');
    // const user = users[id];
    // const user = users.find(u => u.id ==id);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    // res.send('post method success');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})
app.get('/fruits/mango/fajli', (req, res) => {
    res.send('sweet fajli aam')
})

app.listen(port, () => {
    console.log('listenningg to port', port);
})