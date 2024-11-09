import { useState } from 'react'

function App() {
  /**
   * @example1
   * game @{objects}
   * 
   */
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jonh",
    }
  })
  /**
   * @example2
   * pizza @{object}
   * 
   */
  const [pizza, setPizza] = useState({
    name: "Pizza name",
    toppings: ['pizza topping']
  })

  /**
   * @example3
   * carts @objects
   */
  const [carts, setCarts] = useState({
    discount: .1,
    items: [
      {
        id: 1, title: 'Product 1', quantity: 1
      },
      {
        id: 2, title: 'Product 2', quantity: 1
      }
    ]
  })
  const handleClick = () => {
    /**
     * @example1
     * @setGame is used to update the game variable
     * you need use the spread to simplify the logic
     */
    setGame({
      ...game, player: { ...game.player, name: 'July' }
    })
    /**
     * @example2
     * @setPizza is used to update pizza virable
     * to update an array you to first spread the @value of the 
     * @array and then update it.
     * 
     */
    setPizza({
      ...pizza, toppings: [...pizza.toppings, 'new pizza topping']
    })

    /**
     * @example3
     * @setCarts is used to update carts variable
     * when updating @array of @object you need to first map it down to a single objects
     * first to update it one at a times
     */
    setCarts({
      ...carts, items: carts.items.map(item => item.id === 1 ? { ...item, quantity: 2 } : item)
    })
  }

  return (
    <>
      <button onClick={handleClick}>{game.player.name}</button>
    </>
  )
}

export default App
