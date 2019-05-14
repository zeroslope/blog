const H1 = ({ children, id, ...props }) => <h1 id={id} {...props}>
  {children}
  <style jsx>{`
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
  `}</style>
</h1>

const H2 = ({ children, id }) => <h2 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h2 {
      margin-top: 2.5rem;
      font-size: 1.3em;
      font-weight: 550;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a::before {
      content: "## ";
      color: #9D1720;
      font-size: 0.9em;
      font-weight: 700;
    }
  `}</style>
</h2>

const H3 = ({ children, id }) => <h3 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h3 {
      font-size: 1.12em;
      margin-top: 2.5rem;
      font-weight: 500;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a::before {
      content: "### ";
      color: #9D1720;
      font-size: 0.8em;
      font-weight: 700;
    }
  `}</style>
</h3>

export default {
  h1: H1,
  h2: H2,
  h3: H3
}
