
import { Body } from './components/body.component';
import { Footer } from './components/footer.component';
import { Header } from './components/header.component';
import './styles.scss';

console.log(Header, Body, Footer);

document.body.appendChild(Header);
document.body.appendChild(Body);
document.body.appendChild(Footer);
