import {
  faHome,
  faTicket,
  faUser,
  faUserLock,
  faRightToBracket,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Nav() {
  const session = await getServerSession(options);
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4 text-default-text">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon mr-1" />
          Booking.ticket
        </Link>
        <Link href="/tickets/new">
          <FontAwesomeIcon icon={faTicket} className="icon mr-1" />
          Ticket Control
        </Link>
        <Link href="/member">
          <FontAwesomeIcon icon={faUser} className="icon mr-1" />
          Member
        </Link>
        <Link href="/create-user">
          <FontAwesomeIcon icon={faRightToBracket} className="icon mr-1" />
          Admin Control
        </Link>
        <Link href="/admin">
          <FontAwesomeIcon icon={faUserLock} className="icon mr-1" />
          Admin Dashboard
        </Link>
      </div>
      <div className="text-default-text">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </nav>
  );
}
