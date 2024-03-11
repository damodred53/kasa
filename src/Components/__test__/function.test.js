import { render, screen } from '@testing-library/react';
import Galery from '../Galery';
import Carousel from '../Carousel/Carousel';
import logoKasa from '../../assets/logo_footer_kasa.svg';
import Footer from '../Footer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

// Test inutile pour assurer le bon fonctionnement des tests
test('test inutile', () => {
    expect(true).toBe(true);
});

// Test pour vérifier le rendu du composant Galery
test('should render the header', () => {
    render(<Galery />);
    const headerElement = screen.getByTestId('galery-1');
    expect(headerElement).toBeInTheDocument();
});

// Test pour vérifier le rendu du composant Carousel
test('should render the carousel', () => {
    render(<Carousel images={logoKasa} texte="test" />);
    const carouselElement = screen.getByTestId('carousel-1');
    expect(carouselElement).toBeInTheDocument();
});

// Test pour vérifier le rendu du composant Footer et la présence de la classe "footer_div"
test('should render the footer', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-1');
    const elementWithClassFooter = footerElement.getElementsByClassName('footer_div');
    const textElement = screen.getByText('© 2020 Kasa. All rights reserved');

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('footer');
    expect(elementWithClassFooter.length).toBeGreaterThan(0);
    expect(textElement).toBeInTheDocument();
});

// Test pour vérifier le rendu du composant DropdownMenu
test('should render the dropdown menu', () => {
    render(<DropdownMenu />);
    const dropdownElement = screen.getByTestId('dropdown-1');
    expect(dropdownElement).toBeInTheDocument();
});
