const initState = {
    projects: [
        {id: 1, title: 'Quick Note project', content: " this is a note app made from react"},
        {id: 2, title: 'Giftpal Web project', content: " making gifting easy"},
        {id: 3, title: 'Ecommerce  project', content: " a fulll stack ecommerce application with django"},
    ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':  
      console.log("created project:", action.project)
  }
  return state;
};

export default projectReducer;
