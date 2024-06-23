import React from 'react'
import {  IParticipant } from '../../../../../models/interfaces/games'
import { Table } from 'flowbite-react'

type Props = {
    particpantList:IParticipant[]
}

const ParticipantTableCard = ({particpantList}: Props) => {
  return (
    <div>
        <div className=' mt-3'>
          {/* <div className='grid grid-cols-5 w-full'>
            <div className='py-2 border bg-[#0a0a0a] text-white text-center font-semibold'>User ID</div>
            <div className='py-2 border bg-[#0a0a0a] text-white text-center font-semibold'>User Name</div>
            <div className='py-2 border bg-[#0a0a0a] text-white text-center font-semibold'>Bet Color</div>
            <div className='py-2 border bg-[#0a0a0a] text-white text-center font-semibold'>Bet Number</div>
            <div className='py-2 border bg-[#0a0a0a] text-white text-center font-semibold'>Bet Amount</div>
            {particpantList.map(participiant=><>
          <div className='grid place-items-center border text-center'>{participiant?.userData?._id}</div>
          <div className='grid place-items-center border text-center'>{participiant?.userData?.displayName}</div>
          <div className={ `grid place-items-center border text-center ${typeof participiant?.color==="string"&&participiant?.color?.toLowerCase()}-ball text-white grid place-items-center `}>{participiant?.color}</div>
          <div className='grid place-items-center border text-center'>{participiant?.bitNumber}</div>
          <div className='grid place-items-center border text-center'>{participiant?.bitAmount}</div>
          </>)}
          </div> */}
          <Table>
          <Table.Head >
                  <Table.HeadCell>User ID</Table.HeadCell>
                  <Table.HeadCell>User Name</Table.HeadCell>
                  <Table.HeadCell>Bet Color</Table.HeadCell>
                  <Table.HeadCell>Bet Number</Table.HeadCell>
                  <Table.HeadCell>Amount</Table.HeadCell>
                  
                         </Table.Head>
          </Table>
         <div className='relative'>
             <div className=' h-[50vh] border overflow-y-auto custom-scrollbar'>
                 <Table className='w-full'>
              
                         <Table.Body className="divide-y">
                         {particpantList.map(participiant=>
                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell>{participiant?.userData?._id}</Table.Cell>
                         <Table.Cell>{participiant?.userData?.displayName}</Table.Cell>
                         <Table.Cell className={ ` ${typeof participiant?.color==="string"&&participiant?.color?.toLowerCase()}-ball text-white `}>{participiant?.color}</Table.Cell>
                         <Table.Cell>{participiant?.bitNumber}</Table.Cell>
                         <Table.Cell>{participiant?.bitAmount}</Table.Cell>
                         </Table.Row>)}
                  </Table.Body>
                 </Table>
             </div>
         </div>
        </div>
    </div>
  )
}

export default ParticipantTableCard