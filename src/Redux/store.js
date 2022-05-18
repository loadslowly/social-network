const ADD_POST = 'ADD-POST';
const EDIT_POST = 'EDIT-POST';
const EDIT_MESSAGE = 'EDIT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
        dialogsPage: {
            dialogsData:[
                {id: 1, name: 'Fendiglock'},
                {id: 2, name: 'VisaGangBeatz'},
                {id: 3, name: 'Slava'}
            ],
            messagesData:[
                {id: 1, messages: 'Nice one'},
                {id: 2, messages: 'Kaif'},
                {id: 3, messages: 'Chto za key?'}
            ],
            newMessageText: "Load so slowly"
        },
        profilePage: {
            postData:[
                {id: 1, message: 'Hi, it is my first post', img:'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png', likesCount:0},
                {id: 2, message: 'I love song React Redux will know very good it it-ka kamasutra', img:'https://static10.tgstat.ru/channels/_0/05/05274e64325a0dc4180670c7c65adaf4.jpg', likesCount:155},
                {id: 3, message: 'Hey, why nobody love me?', img:'https://i.pinimg.com/564x/e5/a9/2b/e5a92b2a017bcaafbf8431a054608db1.jpg', likesCount:355}
            ],
            profileInfoData:[
                {
                    ava:'https://i.pinimg.com/564x/e5/a9/2b/e5a92b2a017bcaafbf8431a054608db1.jpg',
                    name:'Vsevolod K.',
                    dataOfBirth:'28 april',
                    city:'Krasnodar',
                    education:'KKEP',
                    website:'https://loadslowly.com'
                }
            ],
            newPostText: "Load so slowly"
        },
        sideBarFriends:[
            {name: 'loadslowly', image: 'https://sun9-26.userapi.com/s/v1/if2/DE0Cmxh7mbMJCskP5mewVnKbmtlYYPBJm7p0sLtW2qCu0HMyqPOb_1F5443QgoBU7nF-gbzG8-CBTuT54iKcmC2H.jpg?size=563x566&quality=95&type=album'},
            {name: 'yeat', image: 'https://sun9-55.userapi.com/s/v1/if2/hWecMFLp9neeKD6nVaiox_DOfD01WuPd0ril6EHurzFxTHEBkF0qp-0c8j4g1ITh6EpuHAAvzZeWGDVYH39eSq7A.jpg?size=1080x1080&quality=95&type=album'},
            {name: 'playboi carti', image: 'https://cdn.albumoftheyear.org/album/204466-different-lifestyles.jpg'}
        ],
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPosts(ava) {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            img: ava,
            likesCount:0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    editPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                img: action.ava,
                likesCount:0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === EDIT_POST) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === EDIT_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.message;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                messages: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostsActionCreator = (ava) => ({type: ADD_POST, ava:  ava})
export const onChangePostActionCreator = (text) => ({type: EDIT_POST, text:  text})
export const onChangeMessageActionCreator = (message) => ({type: EDIT_MESSAGE, message:  message})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default store;
window.store = store;
