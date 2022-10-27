const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) =>{
    res.send('Tech Training Hub')
});

app.get('/course-categories', (req, res) =>{
    res.send(categories)
});

app.get('/category/:id', (req, res) =>{
    const id =req.params.id;
    if(id === '08'){
        res.send(courses);
    }
    else{
    const courseCategory = courses.filter(course => course.category_id === id);
    res.send(courseCategory);  
    }
   
})

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})

app.listen(port, ()=> {
    console.log('Tech Training Hub Server Running on',port);
})

