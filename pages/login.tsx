import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";


export default function Login(){
    return (
        <main className='min-h-screen'>
            <section className='flex h-screen items-center justify-center bg-black'>
                <Card className="w-96 shadow-md shadow-gray-300">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center from-black to-blue-gray-900">
                        <Typography variant="h3" color="white">Log in</Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="small" className="mt-1 flex justify-center text-center">
                            Please select your identity provider, otherwise please contact your administrator.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth 
                            className="from-black to-blue-gray-900 hover:scale-105">
                            Sign In
                        </Button>
                    </CardFooter>
                </Card>
            </section>
        </main>
    )
}