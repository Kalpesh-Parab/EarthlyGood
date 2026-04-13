import "./productHero.scss"

const ProductHero = () => {
  return (
      <section className='ProductHero'>
          <h1>
              Shop Healthy Snacks
          </h1>
          <h2>
              Crunchy. Light. Naturally Delicious
          </h2>
          <div className='strip'>
        <div className='track'>
          {[...Array(30)].map((_, i) => (
            <span key={i} className='text'>
              PURE. GOOD. SIMPLE. PURE. GOOD. SIMPLE.
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHero