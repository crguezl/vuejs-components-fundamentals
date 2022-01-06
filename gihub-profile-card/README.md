
## TODO 

### Component github-user-card 

* [ ] Create the HTML initial template
* [ ] Add CDNs for Semantic UI, Vue and Axios
* [ ] Add the Code of the Semantic UI [Card](#card)
* [ ] Create the Vue app object and linkit with the div element with id app
* [ ] Add the call to the component `<github-user-card username="hootlex"></github-user-card>`
* [ ] Add a template with the id `github-user-card-template` for the component with the HTMl of Semantic UI [Card](#card)
* [ ] Add the code to create the `github-user-card` component specifying the template
  * See file `teacher.html` at branch `profile-card` if you have doubts
* [ ] Add the property `username` and a `user` data to the component
* [ ] Add a hook `created` to the component. Inside this hook we are going to make the axios call to the GitHub GraphQL API for the user info
* [ ] Using GitHub REST API you can get the user info from <https://api.github.com/users/crguezl>. Here are some of the fields that can be relevant for the `github-user-card` component:

  ```json
  {
    "login": "crguezl",
    "avatar_url": "https://avatars.githubusercontent.com/u/1142554?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/crguezl",
    "html_url": "https://github.com/crguezl",
    "name": "Casiano Rodriguez-Leon",
    "company": "Universidad de La Laguna @tic-ull",
    "blog": "https://crguezl.github.io/",
    "location": "La Laguna. Tenerife",
    "bio": "My Control Version Bio: Started with Unix RCS, then moved to  CVS, then Subversion and finally git ",
    "public_repos": 338,
    "followers": 196,
    "following": 246,
    "created_at": "2011-10-21T07:00:05Z",
    "updated_at": "2022-01-06T13:49:40Z"
    }
  ```
* [ ] Add the relevant information to the template. Use a computed property `githubYear` so that appears only the year in which the user joined GitHub


## Semantic UI

### CDN providers

We can search for a lib in [cdnjs.com](https://cdnjs.com/libraries/redux-search). If we click in the lib, it appears the list 
of links to the files composing the lib. There we can search for `semantic-ui`.

See also:

* [cdnjs.cloudfare](https://cdnjs.cloudflare.com/)

### Card

* [Views/Card](https://semantic-ui.com/views/card.html)
  
```html
<div class="ui card">
  <div class="image">
    <img src="/images/avatar2/large/kristy.png">
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
```

### Cards

A group of cards.

```html
 35 Friends

Elyse
Coworker
Elyse is a copywriter working in New York.
Joined in 2014 151 Friends
<div class="ui link cards">
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/matthew.png">
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/molly.png">
    </div>
    <div class="content">
      <div class="header">Molly</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Molly is a personal assistant living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/images/avatar2/large/elyse.png">
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
</div>
```

## Axios

* [Axios Intro](https://axios-http.com/docs/intro)
* [Axios en GitHub](https://github.com/axios/axios)
* [https://unpkg.com/axios](https://unpkg.com/axios)


### Performing a GET request

Want to use async/await? Add the `async` keyword to your outer function/method.

```js
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

Or using promises methods:

```js 
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

Optionally the request above could also be done as

```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
```

## Vue Instance Lifecycle hooks 

* See [Instance Lifecycle Hooks](https://crguezl.github.io/learning-vue-geting-started-guide/#instance-lifecycle-hooks) in the teacher [Annotated Reading of the Essentials Section of the Vue.js Guide](https://crguezl.github.io/ learning-vue-geting-started-guide/#annotated-reading-of-the-essentials-section-of-the-vue.js-guide)
  * and the example [Answering your Question with the yesno.wtf API
](https://crguezl.github.io/learning-vue-geting-started-guide/#answering-your-question-with-the-yesno.wtf-api)
* See [Instance Lifecycle Hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) in the docs


Each Vue instance goes through a series of initialization steps when it’s created - for example, it needs 

* to set up data observation, 
* compile the template, 
* mount the instance to the DOM, and 
* update the DOM when data changes. 
  
Along the way, it also runs functions called *lifecycle hooks*, 
giving users the opportunity to add their own code at specific stages.

For example, the `created` hook can be used to run code after an instance is created and it is a time when can safely do asynchronous network operations

