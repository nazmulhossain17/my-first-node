const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Look Mama! I cant coddsde now')
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '019299999999'},
    {id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01932999999'},
    {id: 3, name: 'selim', email: 'selim@gmail.com', phone: '019292399999'},
    {id: 4, name: 'nahid', email: 'nahid@gmail.com', phone: '019256399999'},
    {id: 5, name: 'arif', email: 'arif@gmail.com', phone: '0192993456999'},
    {id: 6, name: 'suchona', email: 'suchona@gmail.com', phone: '01234699999999'},
    {id: 7, name: 'sam', email: 'sam@gmail.com', phone: '019299934259'},
]

app.get('/users', (req, res) =>{
    res.send(users);
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseFloat(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
});

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) =>{
    req.send('sour soud fazle flavor');
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})