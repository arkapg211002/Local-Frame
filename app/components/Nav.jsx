import Link from "next/link";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 p-4 z-10">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/photos" className="text-gray-300 hover:text-gray-100">
                        Photos <PhotoLibraryIcon />
                    </Link>
                </li>
                <li>
                    <Link href="/favorites" className="text-gray-300 hover:text-gray-100">
                        Favorites <BookmarksIcon />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}