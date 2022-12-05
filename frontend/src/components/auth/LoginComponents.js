import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import api from "../../config/api";


const LoginSchema = yup.object().shape({
    username: yup.string().required(), password: yup.string().required(),
});

function LoginComponents() {

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: yupResolver(LoginSchema)
    });

    let errorStyle = {
        color: "red", textDecoration: "node"
    }

    const onSubmit = (data) => {
        api.post("/login", data)
            .then((response) => {
                let token = response.data.token;
                localStorage.setItem("token", token);
                window.location.href = "/admin";
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (<div className="col-md-4 offset-4 mt-5">
        <h1>Login</h1>
        <hr/>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
                <label htmlFor="username">Username:
                    {errors.username && <a style={errorStyle}>{errors.username.message}</a>}
                </label>
                <input type="text" {...register("username")} name="username" id="username"
                       className="form-control"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password:
                    {errors.password && <a style={errorStyle}>{errors.password.message}</a>}
                </label>
                <input type="password" {...register("password")} name="password" id="password"
                       className="form-control"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">Login</button>
            </div>
        </form>
    </div>)
}

export default LoginComponents;