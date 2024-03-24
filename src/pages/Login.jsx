import { ChakraProvider } from '@chakra-ui/react'
import Authentication from '../templates/AuthLayout'
const Login = () => {
    return (
        <ChakraProvider>
            <Authentication />
        </ChakraProvider>
    )
}
export default Login