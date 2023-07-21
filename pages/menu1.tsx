import {
  Input,
  Button,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  IconButton,
  Card,
  CardFooter,
  CardHeader,
  CardBody
} from "@material-tailwind/react";
import { AiFillEdit } from 'react-icons/ai'
import AppNavbar from '@/components/AppNavbar'
import { AiOutlineSearch } from 'react-icons/ai'


const TABLE_HEAD = ["Column 1", "Column 2", "Column 3", "Column 4", "Options"];
 
const TABLE_ROWS = [
  {
    name: "Text 1",
    job: "Manager",
    status: "ACTIVE",
    date: "23/04/18",
  },
  {
    name: "Text 2",
    job: "Manager",
    status: "INACTIVE",
    date: "23/04/18",
  },
  {
    name: "Text 3",
    job: "Manager",
    status: "INACTIVE",
    date: "23/04/18",
  },
  {
    name: "Text 4",
    job: "Manager",
    status: "INACTIVE",
    date: "23/04/18",
  }
];


export default function Menu1() {
    return (
      <main className='min-h-screen'>
        <AppNavbar/>
        
        <section className='flex h-screen text-center text-black bg-white pt-20'>

          <Card className="w-full mx-6 mt-6 mb-auto shadow-md shadow-gray-800">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col items-start">
                    <Typography variant="h4" color="blue-gray">
                        Menu 1
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                        Please change this message
                    </Typography>
                </div>
            </CardHeader>

            <CardBody className="px-4">
              <div className="flex w-full justify-between gap-4 mt-4">
                  <div className="flex flex-grow basis-0">
                      <Input label="Search" color="black"
                          icon={<AiOutlineSearch className="h-5 w-5 text-black" />} />
                  </div>
                  <Button variant="gradient" className="from-black to-blue-gray-900 hover:scale-105">
                      CREATE
                  </Button>
              </div>

              <div className="w-full mt-3">
                <Card className="h-full w-full rounded-md shadow-md">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head, index) => (
                          <th
                            key={head}
                            className="border-blue-gray-100 bg-blue-gray-50/50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-left font-bold leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS.map(({name, job, status, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
          
                        return (
                          <tr key={name}>
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {name}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {job}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Chip
                                  variant="ghost"
                                  size="sm"
                                  value={status}
                                  color={status === "ACTIVE" ? "green" : "blue-gray"}
                                />
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {date}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Tooltip content="Edit">
                                <IconButton variant="text" color="blue-gray">
                                  <AiFillEdit className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>
              </div>
            </CardBody>

            <CardFooter className="flex items-end justify-between p-4">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" color="blue-gray" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" color="blue-gray" size="sm">
                    Next
                </Button>
              </div>
            </CardFooter>
            
          </Card>
        </section>
      </main>
    )
  }