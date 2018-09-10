import Link from "next/link"
import { Container } from 'bloomer'

const footerStyle = {
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  borderTopColor: '#dee1e5',
}

const Footer = () => (
    <footer style={footerStyle}>
      <Container>
        <p>
            ❤️{" "}
            <Link href="https://postlight.com">
                <a>Made by Postlight</a>
            </Link>. 🍴{" "}
            <Link href="https://github.com/postlight/headless-wp-starter">
                <a>Fork on GitHub</a>
            </Link>.
        </p>
        <p>
            👋 Need help with your publishing platform?{" "}
            <Link href="mailto:hello@postlight.com?subject=Partner+with+Postlight+on+a+headless+CMS+project">
                <a>Say hi.</a>
            </Link>
        </p>
        </Container>
    </footer>
);

export default Footer;
