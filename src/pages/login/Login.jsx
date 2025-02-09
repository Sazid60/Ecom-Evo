import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { useState } from "react"
import toast from "react-hot-toast"
import { TbFidgetSpinner } from "react-icons/tb"
import { FcGoogle } from "react-icons/fc"



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const { signIn, signInWithGoogle, resetPassword, loading, setLoading } = useAuth()
    const [email, setEmail] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            setLoading(true)
            // 1. upload image and get url
            await signIn(email, password)
            navigate(from)
            toast.success('Sign in Successful')
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoading(false)
        }
    }

    const handleResetPassword = async () => {
        if (!email) return toast.error('Please Provide email')
        try {
            await resetPassword(email)
            toast.success('Request Successful ')
            setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            setLoading(false)
        }
    }
    // handle google signIn
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            navigate(from)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-[url('/assets/images/login-register/login.jpg')] bg-cover bg-center">
            <div className='flex flex-col max-w-md p-6  sm:p-10 bg-transparent backdrop-blur-3xl text-white border'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onBlur={e => setEmail(e.target.value)}
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border  border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>

                        <button
                            type='submit'
                            className='border w-full py-3 text-white hover:font-bold transition-all duration-300'
                        >
                            {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : 'Continue'}
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button onClick={handleResetPassword} className='text-xs hover:underline hover:font-bold text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <button disabled={loading} onClick={handleGoogleSignIn} className='flex group justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded disabled:cursor-not-allowed cursor-pointer'>
                    <FcGoogle size={32} />

                    <p className="hover:font-bold transition-all duration-300">Sign In with Google</p>
                </button>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/register'
                        className='hover:underline hover:font-bold text-gray-400'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Login
