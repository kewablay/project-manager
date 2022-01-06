export const createProject = (project) => {
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    // make async calls
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Kewa",
        authorLastName: "Blay",
        authorId: "12345",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      }).catch((error)=> {
        dispatch({type: "CREATE_PROJECT_ERROR", error})
      })
  };
};
