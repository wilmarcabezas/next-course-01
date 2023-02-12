import { useRouter } from 'next/router';
import Link from 'next/link';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}
const menuItem = {
    display: 'inline-block',
    marginRight: '20px'
  };

export const ActiveLink = ({ text, href }) => {

    const router = useRouter();

    return (
        <Link href={ href }>
            <div style={menuItem}>
                <a style={ router.asPath===href ? style : null}>{ text }</a>
            </div>
           
        </Link>
    );
}
