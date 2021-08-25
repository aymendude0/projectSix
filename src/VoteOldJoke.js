import React, { Component } from 'react';
import Vote from "./Vote";
import firebase from './firebase';

class VoteOldJoke extends Component {

    constructor(props) {
        super(props);
    
        this.state = { 
          jokes: [],
          userDate: "",
          
        };
      }

      componentDidMount() {
        this.getJokes();
      }
    
      // a function to increment the number of upvotes
      upVoteJoke = (jokeId) => {
        const newJokes = this.state.jokes.map( (joke) => {
          if (joke.id !== jokeId) {
            return joke;
          }
          //update and create new joke array with new value for downvotes
          const newJoke = {
            id: jokeId,
            author: joke.author,
            joke: joke.joke,
            created_on: joke.created_on,
            upvotes: joke.upvotes + 1,
            downvotes: joke.downvotes
          };
    
          // get the joke at this id
          const jokeRef = firebase.database().ref(jokeId); 

    
      //update the upvotes property of this joke in firebase
      jokeRef.child('upvotes').set(newJoke.upvotes);

      return newJoke;
    });

    this.setState({jokes: newJokes});
  }

    //function to increment the number of downvotes on jokes 
  downVoteJoke = (jokeId) => {
    const newJokes = this.state.jokes.map((joke) => {
      if (joke.id !== jokeId) {
        return joke;
      }
      //update and create new joke array with new value for downvotes
      const newJoke = {
        id: joke.id,
        author: joke.author,
        joke: joke.joke,
        created_on: joke.created_on,
        upvotes: joke.upvotes,
        downvotes: joke.downvotes + 1
      };

      // get the joke at this id
      const jokeRef = firebase.database().ref(jokeId); 

      //update the downvotes property of this joke in firebase
      jokeRef.child('downvotes').set(newJoke.downvotes);
      return newJoke;
    });

    this.setState({ jokes: newJokes });
  }
 
    getJokes = () => {
        this.setState({
            jokes: []
        })
        const dbRef = firebase.database().ref();
        const newJokesArray = [];
        dbRef.on('value', (snapshot) => {
          const data = snapshot.val();

            
          //restructuring data from firebase into our joke object in order to set state for jokes coming back from firebase

          for (let propertyName in data) {
            const record = data[propertyName];
            const newJoke = {
              id: propertyName,
              author: record.author,
              joke: record.joke,
              created_on: record.created_on,
              upvotes: record.upvotes,
              downvotes: record.downvotes
            }
    
            newJokesArray.push(newJoke)
          }

        let newArray = newJokesArray;
        if (this.state.userDate !== "") {
            newArray = newJokesArray.filter((joke) => {
            let jokeDate = new Date(joke.created_on)
            jokeDate = jokeDate.toISOString().substr(0,10);
            return jokeDate === this.state.userDate;
            }) 
        }


        this.setState({
            jokes: newArray
          });
        })
    }


    submitDate = (event) => {
        event.preventDefault();
        this.getJokes();
    }

    getDate = (event) => {
        this.setState({
            userDate: event.target.value
        })
    }

    resetForm = (event) => {        
        this.setState({
            userDate: "",
        }, () => {
            this.getJokes();
        });
    }

    render() {
        return (
            <div className="randomOtherContainer">
                <form onSubmit={this.submitDate}>
                    <label for>Choose a date</label>
                    <input onChange={this.getDate} type="date"/>
                    <button type="submit">Submit</button>
                    <button onClick={this.resetForm} type="reset">Back to Leaderboard</button>
                </form>
                {this.state.jokes.length === 0?<h2 className="errorText">No joke for this day, please select another day</h2>:
                <div>
                    <h2 className="rateText">Rate which jokes are best!</h2><Vote parent="voteOldJoke" jokes={this.state.jokes} upVoteJoke={this.upVoteJoke} downVoteJoke={this.downVoteJoke}/>
                </div>
            }
            </div>
        )
    }
    }


export default VoteOldJoke;