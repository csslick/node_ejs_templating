const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs'); // set ejs engine
app.set('views', 'views');	// templates(ejs) views 경로 지정

// fake posts to simulate DB
var posts =[
	{
		id: 1,
		author: 'kwon',
		title: 'Templating with EJS',
		body: 'Blog post number 1'
	},	
	{
		id: 2,
		author: 'lee',
		title: 'Express: Starting from the Bottom',
		body: 'Blog post number 2'
	},
	{
		id: 3,
		author: 'John',
		title: 'HTML & CSS',
		body: 'Blog post number 3'
	},
	{
		id: 4,
		author: 'Snake',
		title: 'Events',
		body: 'Blog post number 4'
	}	
];

// home
app.get('/', (req, res) => {
	// console.log(posts);
	res.render('index', {posts: posts});
});

// blog post
app.get('/post/:id', (req, res) => {
	var id = req.params.id - 1;

	// post.ejs에 전달할 templet 객체변수
	var output = {
		author: posts[id].author,
		title: posts[id].title,
		body: posts[id].body
	}

	res.render('post', output);	
});




// server run
app.listen(3000, () => {
	console.log('Server run at 3000 port');
});






