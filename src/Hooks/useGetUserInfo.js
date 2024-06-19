export const useGetUserInfo = () =>{
    const { name, profilePhoto, userID, isAuth } = JSON.stringify(localStorage.getItem("auth"));
    return { name, profilePhoto, userID, isAuth };
}
