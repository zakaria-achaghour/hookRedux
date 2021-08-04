import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETED_TODO } from "../types/type";
const initialState = {
    todos:[],
    loading:true
};

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TODOS:
            return { ...state, todos: action.payload, loading:false }
            
        // case 'GET_TODO':
        //   return { ...state, contact: action.payload }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        // case 'UPDATE_TODO': 
        //       return{
        //         ...state,
        //         contacts:state.contacts.map(contact => contact.id === action.payload.id ?(contact = action.payload):contact )
        //       } 

        // const index = state.findIndex(
        //         (todo) => todo.id === action.payload.id
        //         );
        //     state[index].completed = action.payload.completed; 

        case COMPLETED_TODO:

            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ?({id:todo.id,title:todo.title ,completed:action.payload.completed}):todo )
              
            }
        default: {
            return state;
        }
    }
}

export default todoReducer;