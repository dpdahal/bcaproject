import {useEffect} from "react";

function HomeComponents() {

    useEffect(() => {
        fetch('http://localhost:8000/users').then(response =>
            response.json())
            .then(data =>
                console.log(data)
            );
    });


    return (
        <div>
            <h1>Home Components</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consectetur deserunt dolorum
                ea eius, fugit in, ipsam minima nisi pariatur perspiciatis
                possimus provident quidem recusandae repudiandae saepe soluta tempora?
            </p>
        </div>
    )
}

export default HomeComponents;