import LogoutIcon from '@mui/icons-material/Logout';

export default function SignOutButton() {
    return (
        <form action="/auth/signout" method="post">
            <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
            >
                Sign Out <LogoutIcon />
            </button>
        </form>
    )
}