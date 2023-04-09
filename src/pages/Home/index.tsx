import { motion } from 'framer-motion'

import { CoffeeList } from './CoffeeList/ index'
import { Intro } from './Intro'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.2 }}
    >
      <HomeContainer>
        <Intro />
        <CoffeeList />
      </HomeContainer>
    </motion.div>
  )
}
