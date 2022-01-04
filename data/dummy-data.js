import Product from "../models/product"

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'White Tshirt',
    'https://fabrilife.com/products/designproduct5af0a57a34f43.png?v=1',
    'A White t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Blue Jacket',
    'https://us.jackwolfskin.com/medias/sys_master/images/images/ha4/h8b/8836819517470/1111201-1152-9-1-stormy-point-jacket-w-brilliant-blue.png',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Coffee Mug',
    'https://tse2.mm.bing.net/th?id=OIP.UOa3jTpKRwVmqXLPiraNpgHaK0&pid=Api&P=0&w=300&h=300',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'The Book - Limited Edition',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'PowerBook',
    'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Pen & Paper',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49
  )
];

export default PRODUCTS;