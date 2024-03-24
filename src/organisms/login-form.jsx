import { Alert, AlertIcon, ChakraProvider } from "@chakra-ui/react"
import {
  Stack,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Link,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import PeopleFill from "../atoms/icon/people-fill";
import LockFill from "../atoms/icon/lock-fill";
const LoginForm = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const[isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data login
        console.log("Username:", username);
        console.log("Password:", password);
    if(username === "admin" && password === "123"){
        setIsSuccess(true);
        setIsError(false);
        }
        else{
        setIsError(true);
        setIsSuccess(false);
        }
    };
    return (
        <ChakraProvider>
            <Stack spacing={3}>
                {isSuccess &&
                    <Alert status='success' variant='subtle'>
                        <AlertIcon />
                        Login Berhasil
                    </Alert>
                }
                {isError &&
                    <Alert status='error' variant='subtle'>
                        <AlertIcon />
                        Login Gagal
                    </Alert>
                }
            </Stack>
            <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl id="Username">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PeopleFill />
                        </InputLeftElement>
                        <Input type="text" username={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    </InputGroup>
                </FormControl>
                <FormControl id="Password">
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <LockFill />
                        </InputLeftElement>
                        <Input type="password" username={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </InputGroup>
                </FormControl>
            </Stack>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Button type="submit" w={'full'} colorScheme={'blue'} variant={'solid'}>
                    Sign in
                </Button>
                <Text fontSize={'sm'}><Link color={'blue.500'}>Pusat Bantuan</Link> | &copy; 2024 . Kaputama Command Center</Text>
              </Stack>
            </Stack>
            </form>
        </ChakraProvider>
    )
}
export default LoginForm