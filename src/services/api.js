export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    return data;
};


export const getUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const data = await res.json();
    return data;
}
export const getDetailsPosts = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    const data = await res.json();
    return data;
}
// export const getMeals = async (id) => {
//     const res = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${id}`);
//     const data = await res.json();
//     return data;
// }
