'use client'
import {Box, Stack, Typography} from '@mui/material'
import { collection } from 'firebase/firestore'
import { firestore } from './firebase'
import { useEffect } from 'react'
const foodItems = [
  "Apple",
  "Banana",
  "Carrot",
  "Donut",
  "Eggplant",
  "Fish",
  "Grapes",
  "Hamburger",
  "Ice Cream",
  "Jelly",
  "Kale",
  "Lemon",
  "Mango",
  "Noodles",
  "Orange",
  "Pizza",
  "Quinoa",
  "Rice",
  "Strawberry",
  "Tomato",
  "Udon",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Yogurt",
  "Zucchini"
]

export default function Home() {
  useEffect(() => {
    const items = collection(firestore, 'pantry')
    console.log(items)
  }, [])

  // useEffect(() => {
  //   const updatePantry = async () => {
  //     const snapshot = query(collection(firestore, 'pantry'))
  //     const docs = await getDocs(snapshot)
  //     docs.forEach((doc) => {
  //       console.log(doc.id, doc.data())
  //     })
  //   }
  //   updatePantry()
  // }, [])

  return <Box 
  witdth='100vw' 
  height='100vh'
  display={'flex'}
  justifyContent={'center'}
  flexDirection={'column'}
  alignItems={'center'}
  >
    <Box border={'1px solid #333'}>
    <Box width={"800px"} height={"100px"} bgcolor={"#ADD8E6"} display={'flex'} justifyContent={'center'} alignItems={'center'} 
    >
      <Typography
            variant='h2'
            color={'#333'}
            textAlign={'center'}>              
            Food Pantry
          </Typography>
    </Box>
    <Stack width="800px" height="500px" spacing={2} overflow={'auto'}>

      {foodItems.map((i) => (
        <Box
          key={i}
          width={"100%"}
          height={"300px"}
          display={"flex"}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={"#f0f0f0"}>
          <Typography
            variant='h3'
            color={'#333'}
            textAlign={'center'}>              
            {
              //Capitalize first letter of item
              i.charAt(0).toUpperCase() + i.slice(1)
            }
          </Typography>
        </Box>
      ))}
    </Stack>
    </Box>
  </Box>

  
}