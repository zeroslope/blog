import link from './link'

const Item = ({ name, path, active }) => {
  if (!active) {
    return (
      <link.a href={path} prefetch>
        {name}
      </link.a>
    )
  }
  return <span>{name}</span>
}

export default ({ url }) => <div className='navigation'>
  <Item name='Blog' path='/' active={url === '/'} />
  <Item name='About' path='/about' active={url === '/about'} />
  <style jsx>{`
    .navigation {
      display: flex;
      justify-content: flex-end;
      margin: 3rem -.5rem 1rem;
    }
    .navigation :global(a) {
      color: #9D1720;
    }
    .navigation :global(span) {
      color: black;
      cursor: default;
    }
    .navigation :global(a), .navigation :global(span) {
      margin: 0 .5rem;
    }
  `}</style>
</div>
