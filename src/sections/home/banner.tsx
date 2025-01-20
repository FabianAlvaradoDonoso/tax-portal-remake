export function Banner() {
  return (
    <div className="mx-10 rounded-xl border bg-card shadow">
      <a href="#">
        <img
          className="h-[300px] w-dvw rounded-t-lg object-cover object-center dark:brightness-75"
          src="/images/banner.webp"
          alt="Banner Dashboard"
        />
      </a>
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Bienvenido a{' '}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            RedPanda
          </span>{' '}
          Dashboard!
        </h5>
      </div>
    </div>
  )
}
