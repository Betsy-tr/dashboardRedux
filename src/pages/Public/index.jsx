import React from 'react'
import { loginByEmail, logout } from '../../commonjs/auth'
import { useForm } from 'react-hook-form'


const Public = () => {

    const {register , handleSubmit , formState:{errors} } = useForm() // Initialisation du hook (useForm) pour la gestion d'erreurs

    const login = async (data) => { 
        
        //event.preventDefault()
         console.log(data)

        const {email , password } = data
        
         loginByEmail(email , password).then(user =>{

         }).catch(error =>{
             console.log('error' , error)
         })
    }

  return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <form onSubmit={handleSubmit(login)}> {/* Avant d'envoyer, on contrôle */}

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' {...register('email' , {required: true})} placeholder="email" className="input input-bordered" />
                                    {errors.email && <label className="label">
                                        <span className="label-text-alt text-red-700">L'email est requis</span>
                                    </label>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' {...register('password' , {required: true})} placeholder="password" className="input input-bordered" />
                                    {errors.password && <label className="label">
                                        <span className="label-text-alt text-red-700">Le mot de passe est requis</span>
                                    </label>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit'className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button type='submit' onClick={logout} className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Public