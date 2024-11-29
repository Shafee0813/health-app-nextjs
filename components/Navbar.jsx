import Link from "next/link"

const Navbar = () => {
  return (
    <section className="flex w-full">
      <nav className="m-4 flex justify-between items-center w-full">
        <div className="text-3xl pl-8 font-bold text-green-400"> HealthMate </div>
        <ul className="flex gap-4 text-green-400 pr-4">
          <li>
            <Link href="/calorie-tracking">Calorie Tracking</Link>
          </li>
          <li>
            <Link href="/exercises">Exercises</Link>
          </li>
          <li>
            <Link href="/assistant">Assistant</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar