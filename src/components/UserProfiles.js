import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";
export const UserProfiles = () => {
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setPost(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (<>
        {post.map((ele) => (
            <div>
                <h1>{ele.name}</h1>
                <p>{ele.email}</p>
            </div>
        ))}</>

    );

}
