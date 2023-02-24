import { rerenderTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id:1, mes: "Hi,how are yous?", likeC: 12 },
      { id:2, mes: "It`s my first post", likeC: 24 },
    ],
    newPostText: 'it-kamasutra.com'
  },
  dialogPage: {
    dialog: [
      { id: 1, name: "Alex" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Valera" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Dimyc" },
    ],
    messages: [
      { id: 1, massage: "Hi" },
      { id: 2, massage: "How are you" },
      { id: 3, massage: "it kamasutra" },
      { id: 4, massage: "YO" },
      { id: 5, massage: "Yo" },
      { id: 6, massage: "Yoo" },
    ],
  },

};

window.state = state

export let addPost = () => {
   let newPost = {
    id: 3,
    mes: state.profilePage.newPostText,
    likeC: 0,
   };

   state.profilePage.post.push(newPost);
   rerenderTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
}

export default state;
