import { ChevronDownIcon, CloudArrowDownIcon } from '@heroicons/react/24/solid';
import { Accordion, AccordionBody, AccordionHeader, Button, Card, CardBody, CardFooter, CardHeader, Chip, Tooltip, Typography } from '@material-tailwind/react'
import axios from 'axios';
import React, { useState } from 'react'
import download from 'downloadjs'

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function BillCard({
  billId,
  products = [],
  totalPrice,
  date
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const url = import.meta.env.VITE_BACKEND_URL;

  function downloadBill() {
    axios.get(`${url}/api/bill/getbill/${billId}`, {
      responseType: 'blob'
    })
      .then(response => {
        const content = response.headers['content-type'];
        download(response.data, `bill-${billId}.pdf`, content)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Card className='w-full p-2'>
        <CardHeader shadow={false} floated={false} className=''>
          <div className='flex items-center gap-4'>
            <Typography variant='h4' className='text-black font-bold uppercase' textGradient>Bill Id :</Typography>
            <Typography variant='h6' className='text-gray-600 font-medium' textGradient>{billId}</Typography>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-center gap-2 lg:justify-between'>
            <div className='flex items-center gap-4'>
              <Typography variant='h6' className='text-black font-bold uppercase' textGradient>Date :</Typography>
              <Typography variant='h6' className='text-gray-600 font-medium' textGradient>{new Date(date).toISOString().split('T')[0]}</Typography>
            </div>
            <div className='flex items-center gap-4'>
              <Typography variant='h6' className='text-black font-bold uppercase' textGradient>Time :</Typography>
              <Typography variant='h6' className='text-gray-600 font-medium' textGradient>{new Date(date).toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Tooltip content="Click to view items" placement="top" className="bg-gray-600" animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}>
            <Accordion open={open} icon={<Icon open={open} />}>
              <AccordionHeader onClick={handleOpen} className='uppercase'>Items ordered</AccordionHeader>
              <AccordionBody>
                <table className='w-full min-w-max table-auto text-left mb-4'>
                  <thead>
                    <tr>
                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Item name
                        </Typography>
                      </th>

                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Quantity
                        </Typography>
                      </th>

                      <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Price
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.length > 0 ?
                        products.map(item => (<tr key={item._id} className="even:bg-blue-gray-50/50">
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {item.name}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {item.quantity}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {item.price}
                            </Typography>
                          </td>
                        </tr>)) :
                        <>
                          <Typography variant='h2' textGradient className='text-black'>No items</Typography>
                        </>
                    }
                  </tbody>
                </table>
                <Button variant="gradient" className="flex items-center justify-center gap-3" fullWidth onClick={downloadBill} >
                  <CloudArrowDownIcon className='h-5 w-5' />
                  Download Bill
                </Button>
              </AccordionBody>

            </Accordion>
          </Tooltip>
          <Chip variant='gradient' color='green' value={`Total price : ${totalPrice}`} size='lg' />
        </CardBody>

      </Card>
    </>
  )
}

export default BillCard