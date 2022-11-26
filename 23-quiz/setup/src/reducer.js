const AMOUNT="AMOUNT",DIFFICULTY="DIFFICULTY",CATEGORY="CATEGORY";



export default function reducer(state,action){
    switch (action.type){
        case AMOUNT:
            return{
                ...state,
                amount:action.amount
            }
        case DIFFICULTY:
            return{
                ...state,
                difficulty:action.difficulty
            }
        case CATEGORY:
            return{
                ...state,
                category:action.category
            }
        

    }


}