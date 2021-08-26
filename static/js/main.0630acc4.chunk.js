(this["webpackJsonpjoke-app"]=this["webpackJsonpjoke-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(39),s=a.n(r),c=(a(48),a(4)),i=a(5),u=a(7),l=a(6),d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"appHead"},o.a.createElement("h1",{className:"dadJokesHead"},"The Joke Factory")))}}]),a}(n.Component),m=a(21),k=a.n(m);a(49);k.a.initializeApp({apiKey:"AIzaSyAsZzlfleBeT9bzHKQrOQS1ow9n4156J2o",authDomain:"joke-generator-4248a.firebaseapp.com",databaseURL:"https://joke-generator-4248a.firebaseio.com",projectId:"joke-generator-4248a",storageBucket:"joke-generator-4248a.appspot.com",messagingSenderId:"250719953187",appId:"1:250719953187:web:fea752e43d0798e812ec96"});var p=k.a,h=a(42),v=a(22),j=a(17),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleUpVote=function(t){e.props.upVoteJoke(t)},e.handleDownVote=function(t){e.props.downVoteJoke(t)},e.sortArray=function(){var t=Object(h.a)(e.props.jokes);return t.sort((function(e,t){var a=e.upvotes-e.downvotes,n=t.upvotes-t.downvotes;return n<a?-1:n>a?1:0})),t},e.addVoteColor=function(e){return e>4?"jokeLeader4":"jokeLeader".concat(e)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=[];return t="jokeEntry"===this.props.parent?this.props.jokes:this.sortArray(),o.a.createElement("div",{className:"jokeBoard"},o.a.createElement("ul",{className:"jokeContainer"},t.map((function(t,a){var n=t.upvotes-t.downvotes;return o.a.createElement("li",{key:t.id,className:e.addVoteColor(a)},o.a.createElement("div",{className:"cardWrapper"},o.a.createElement("h2",null,t.created_on),o.a.createElement("p",null,t.joke)),o.a.createElement("div",{className:"jokeDetail"}," ",o.a.createElement("p",null," By: ",t.author," ")," ",o.a.createElement("p",null,"Total Votes:",n)),o.a.createElement("div",{className:"buttonStyle"},o.a.createElement("button",{onClick:function(){return e.handleUpVote(t.id)},id:t.id},o.a.createElement(v.a,{icon:j.b})),o.a.createElement("button",{onClick:function(){return e.handleDownVote(t.id)},id:t.id},o.a.createElement(v.a,{icon:j.a}))))}))))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).upVoteJoke=function(e){var t=n.state.jokes.map((function(t){if(t.id!==e)return t;var a={id:e,author:t.author,joke:t.joke,created_on:t.created_on,upvotes:t.upvotes+1,downvotes:t.downvotes};return p.database().ref(e).child("upvotes").set(a.upvotes),a}));n.setState({jokes:t})},n.downVoteJoke=function(e){var t=n.state.jokes.map((function(t){if(t.id!==e)return t;var a={id:t.id,author:t.author,joke:t.joke,created_on:t.created_on,upvotes:t.upvotes,downvotes:t.downvotes+1};return p.database().ref(e).child("downvotes").set(a.downvotes),a}));n.setState({jokes:t})},n.handleChange=function(e){"newJoke"===e.target.id?n.setState({jokeInput:e.target.value}):n.setState({nameInput:e.target.value})},n.submitForm=function(e){if(e.preventDefault(),n.state.jokeInput.match(/^[a-z]+/gi)&&n.state.nameInput.match(/^[a-z]+/gi)){var t=(new Date).toDateString();p.database().ref().push({author:n.state.nameInput,created_on:t,joke:n.state.jokeInput,upvotes:0,downvotes:0})}else alert("Please fill in all text fields")},n.state={jokes:[],jokeInput:"",nameInput:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var o in a){var r=a[o],s={id:o,author:r.author,joke:r.joke,created_on:r.created_on,upvotes:r.upvotes,downvotes:r.downvotes};n.push(s)}n.reverse(),e.setState({jokes:n.slice(0,12)})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.submitForm,action:"submit"},o.a.createElement("label",{htmlFor:"newJoke"},"Got a joke? Let's hear it"),o.a.createElement("textarea",{placeholder:"Input your joke here",onChange:this.handleChange,rows:"5",cols:"50",minLength:"6",maxLength:"200",id:"newJoke",required:!0}),o.a.createElement("label",{htmlFor:"newJoke"},"Who's posting? (incase it sucks)"),o.a.createElement("input",{placeholder:"Input your name here",onChange:this.handleChange,maxLength:"20",type:"text",id:"author",required:!0}),o.a.createElement("button",{className:"addJokeBtn"},"Add Joke")),o.a.createElement("h2",{className:"mainRate"},"Rate which jokes are best!"),o.a.createElement(f,{parent:"jokeEntry",jokes:this.state.jokes,upVoteJoke:this.upVoteJoke,downVoteJoke:this.downVoteJoke}))}}]),a}(n.Component),E=a(16),J=a(40),w=a.n(J),g=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).randomJoke=null,e.state={isGeneratingJoke:!1},e.onGenerateJoke=e.onGenerateJoke.bind(Object(E.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.onGenerateJoke()}},{key:"generateJoke",value:function(){var e=this;this.setState({isGeneratingJoke:!0}),w()({method:"GET",url:"https://icanhazdadjoke.com/",responseType:"json",headers:{Accept:"application/json"}}).then((function(t){e.setState({randomJoke:t.data.joke,isGeneratingJoke:!1})}))}},{key:"onGenerateJoke",value:function(){this.generateJoke()}},{key:"render",value:function(){return o.a.createElement("div",{className:"randomJokeContainer"},o.a.createElement("h1",null,"Random Joke Generator"),o.a.createElement("button",{className:"randomJokeBtn",onClick:this.onGenerateJoke,disabled:this.state.isGeneratingJoke},"Tell me a joke"),o.a.createElement("p",{className:"randomJokeResult"},this.state.isGeneratingJoke?"Generating random joke...":this.state.randomJoke))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("p",null,"Copyright \xa9 2020"),o.a.createElement("p",null,"The Joke Factory: Aymen Mahmod, Saud Khoja, Kristen Scheel"))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).upVoteJoke=function(e){var t=n.state.jokes.map((function(t){if(t.id!==e)return t;var a={id:e,author:t.author,joke:t.joke,created_on:t.created_on,upvotes:t.upvotes+1,downvotes:t.downvotes};return p.database().ref(e).child("upvotes").set(a.upvotes),a}));n.setState({jokes:t})},n.downVoteJoke=function(e){var t=n.state.jokes.map((function(t){if(t.id!==e)return t;var a={id:t.id,author:t.author,joke:t.joke,created_on:t.created_on,upvotes:t.upvotes,downvotes:t.downvotes+1};return p.database().ref(e).child("downvotes").set(a.downvotes),a}));n.setState({jokes:t})},n.getJokes=function(){n.setState({jokes:[]});var e=p.database().ref(),t=[];e.on("value",(function(e){var a=e.val();for(var o in a){var r=a[o],s={id:o,author:r.author,joke:r.joke,created_on:r.created_on,upvotes:r.upvotes,downvotes:r.downvotes};t.push(s)}var c=t;""!==n.state.userDate&&(c=t.filter((function(e){var t=new Date(e.created_on);return(t=t.toISOString().substr(0,10))===n.state.userDate}))),n.setState({jokes:c})}))},n.submitDate=function(e){e.preventDefault(),n.getJokes()},n.getDate=function(e){n.setState({userDate:e.target.value})},n.resetForm=function(e){n.setState({userDate:""},(function(){n.getJokes()}))},n.state={jokes:[],userDate:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getJokes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"randomOtherContainer"},o.a.createElement("form",{onSubmit:this.submitDate},o.a.createElement("label",{for:!0},"Choose a date"),o.a.createElement("input",{onChange:this.getDate,type:"date"}),o.a.createElement("button",{type:"submit"},"Submit"),o.a.createElement("button",{onClick:this.resetForm,type:"reset"},"Back to Leaderboard")),0===this.state.jokes.length?o.a.createElement("h2",{className:"errorText"},"No joke for this day, please select another day"):o.a.createElement("div",null,o.a.createElement("h2",{className:"rateText"},"Rate which jokes are best!"),o.a.createElement(f,{parent:"voteOldJoke",jokes:this.state.jokes,upVoteJoke:this.upVoteJoke,downVoteJoke:this.downVoteJoke})))}}]),a}(n.Component),S=a(14),C=a(2),V=(a(71),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(S.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(d,null),o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(S.b,{to:"/generateJoke"},"Random Joke")),o.a.createElement("li",null,o.a.createElement(S.b,{to:"/kristenAymenSaudProject6ix"},"Add Joke")),o.a.createElement("li",null,o.a.createElement(S.b,{to:"/voteForJoke"},"Vote for a Joke"))))),o.a.createElement(C.a,{exact:!0,path:"/kristenAymenSaudProject6ix",component:b}),o.a.createElement(C.a,{exact:!0,path:"/voteForJoke",component:O}),o.a.createElement(C.a,{path:"/generateJoke",exact:!0,component:g}),o.a.createElement(y,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0630acc4.chunk.js.map