/*
possible fields:
total:
group:
category:
*/
const initialState = {
    available: 0,
    unallocated: 0,
    categories: {},
};

export function fundReducer(state = initialState, action)
{
    switch (action.type)
    {


        case 'RESET':
            return initialState;
        case 'ADD_TOTAL_AVAILABLE':
            return {
                ...state,
                available: money_round(state.available + parseFloat(action.amount)),
                unallocated: money_round(state.unallocated + parseFloat(action.amount)),
            };
        case 'REMOVE_TOTAL_AVAILABLE':
            return {
                ...state,
                available: money_round(state.available - parseFloat(action.amount)),
                unallocated: money_round(state.unallocated - parseFloat(action.amount)),
            };
        case 'INITIALIZE_CATEGORY':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        available: 0,
                        allocated: 0,
                        goal: 0,
                        lastTransaction: 0,
                    },
                },


            };

        case 'ALLOCATE_TO_CATEGORY':
            return {
                ...state,
                unallocated: money_round(state.unallocated - parseFloat(action.amount)),
                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        available: money_round(state.categories[action.categoryID].available + parseFloat(action.amount)),
                        allocated: money_round(state.categories[action.categoryID].allocated +  parseFloat(action.amount)),
                    },
                },


            };
        case 'DEALLOCATE_CATEGORY':
            let allocatedToGroup = 0;
            let allocatedToCategory = 0;
            let groupAmount = 0;
            let categoryAmount = 0;
            if (parseFloat(action.amount) >= 0)
            {

                allocatedToCategory = money_round(state.categories[action.categoryID].allocated - parseFloat(action.amount));

                categoryAmount = money_round(state.categories[action.categoryID].available - parseFloat(action.amount));
            }
            else
            {

                allocatedToCategory = money_round(state.categories[action.categoryID].allocated + parseFloat(action.amount));

                categoryAmount = money_round(state.categories[action.categoryID].available);

            }

            return {
                ...state,
                unallocated: money_round(state.unallocated + parseFloat(action.amount)),

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        available: categoryAmount,
                        allocated: allocatedToCategory,
                    },
                },

            };
        case 'SPEND_CATEGORY':
            return {
                ...state,
                available: money_round(state.available - parseFloat(action.amount)),
                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        available: money_round(state.categories[action.categoryID].available - parseFloat(action.amount)),
                    },
                },

            };

        case 'REMOVE_SPEND_CATEGORY':
            return {
                ...state,
                available: money_round(state.available + parseFloat(action.amount)),

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        available: money_round(state.categories[action.categoryID].available + parseFloat(action.amount)),
                    },
                },

            };


        case 'START_OF_MONTH_RESET_CATEGORY':
            return {
                ...state,

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        allocated: 0,
                    },
                },

            };
        case 'SET_TRANSACTION_TIME':
            return {
                ...state,

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        lastTransaction: action.time,
                    },
                },


            };
        case 'SET_CATEGORY_GOAL':
            return {
                ...state,

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        goal: action.amount,
                    },
                },


            };
        case 'ADD_UNALLOCATED':
            return {
                ...state,
                unallocated: money_round(state.unallocated + parseFloat(action.amount)),


            };


        case 'START_OF_MONTH_CATEGORY_NEGATIVE':
            return {
                ...state,
                unallocated: money_round(state.unallocated - Math.abs(parseFloat(action.amount))),

                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        available: 0,
                    },
                },

            };
        /*
case 'REMOVE_ALLOCATED_GROUP':
   let allocatedAmount = 0;
   let availableAmount = 0;
   if (action.amount >= 0)
   {
       allocatedAmount = state.groups[action.groupID].allocated - action.amount;

   }
   else
   {
       allocatedAmount = state.groups[action.groupID].allocated + action.amount;
   }
   return {
       ...state,
       groups: {
           ...state.groups,
           [action.groupID]: {
               ...state.groups[action.groupID],
               allocated: allocatedAmount,

           },
       },
   };
case 'REMOVE_SPEND_ONLY_CATEGORY':
   return {
       ...state,
       groups: {
           ...state.groups,
           [action.groupID]: {
               ...state.groups[action.groupID],
               categories: {
                   ...state.groups[action.groupID].categories,
                   [action.categoryID]: {
                       ...state.groups[action.groupID].categories[action.categoryID],
                       available: state.groups[action.groupID].categories[action.categoryID].available + action.amount,
                   },
               },
           },
       },
   };
case 'SPEND_ONLY_CATEGORY':
   return {
       ...state,
       groups: {
           ...state.groups,
           [action.groupID]: {
               ...state.groups[action.groupID],
               categories: {
                   ...state.groups[action.groupID].categories,
                   [action.categoryID]: {
                       ...state.groups[action.groupID].categories[action.categoryID],
                       available: state.groups[action.groupID].categories[action.categoryID].available - action.amount,
                   },
               },
           },
       },
   };
case 'INITIALIZE_GROUP':
   return {
       ...state,
       groups: {
           ...state.groups,
           [action.groupID]: {
               ...state.groups[action.groupID],
               lastTransaction: 0,
               available: 0,
               allocated: 0,
           },
       },
   };

case 'START_OF_MONTH_RESET_GROUP':
   return {
       ...state,
       groups: {
           ...state.groups,
           [action.groupID]: {
               ...state.groups[action.groupID],
               allocated: 0,
           },
       },
   };


*/
        default:
            return state;
    }


}

function money_round(num)
{
    return Math.floor(num * 100) / 100;
}
