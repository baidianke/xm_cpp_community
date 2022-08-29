import Error from 'next/error'

export default function NotFound() {
  // Opinionated: do not record an exception in Sentry for 404
  return  <p>404</p>
  // return <Error statusCode={404} />
}