import { useLayoutEffect, useRef } from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {
  const h2ref = useRef();
  useLayoutEffect(() => {
    const { height, width } = h2ref.current.getBoundingClientRect();
    console.log({height, width});
  }, [name])
  return (
    <section style={{height: 200, display: 'flex', flexDirection: 'row'}}>
        <h2 ref= {h2ref} className='text-capitalize'>#{id} - {name}</h2>
        
        <div>
        {sprites.map(sprite => (
                <img key={sprite} src={sprite} alt={name} />
            ))

        }
        </div>
    </section>
  )
}
