require('dotenv').config();
const express=require('express');
const app=express();
const port=4000;

const github={
  "login": "nirajan3477",
  "id": 141661448,
  "node_id": "U_kgDOCHGVCA",
  "avatar_url": "https://avatars.githubusercontent.com/u/141661448?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/nirajan3477",
  "html_url": "https://github.com/nirajan3477",
  "followers_url": "https://api.github.com/users/nirajan3477/followers",
  "following_url": "https://api.github.com/users/nirajan3477/following{/other_user}",
  "gists_url": "https://api.github.com/users/nirajan3477/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/nirajan3477/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/nirajan3477/subscriptions",
  "organizations_url": "https://api.github.com/users/nirajan3477/orgs",
  "repos_url": "https://api.github.com/users/nirajan3477/repos",
  "events_url": "https://api.github.com/users/nirajan3477/events{/privacy}",
  "received_events_url": "https://api.github.com/users/nirajan3477/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nirajan Verma",
  "company": "WDEFRGH",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2023-08-07T16:27:39Z",
  "updated_at": "2025-08-14T16:36:32Z"
}
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/github',(req,res)=>{
    res.json(github);
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.listen(process.env.port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});