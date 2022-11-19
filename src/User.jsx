import { useState, useEffect } from 'react';

const User = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() => {
        try {
            await fetch("https://jsonplaceholder.typicode.com" + props.urlEnd)
                    .then((res) => res.json())
                    .then((data) => setData(data));
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <div>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.name}</p>;
            })}
        </div>
    );
}

export default User;